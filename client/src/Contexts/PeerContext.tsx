'use client';
import { createContext, useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../Redux/Slices/UserSlice';
import getSocket from '@lib/SocketConnect';
import { userType } from '@lib/types/user';

interface CallingInfo {
    from: string;
    to: string;
    callerName: string;
    acceptorName: string;
    signal: any;
}

// interface PeerContextProps {
//     callingInfo: CallingInfo;
//     callAccepted: boolean;
//     myVideo: React.RefObject<HTMLVideoElement>;
//     userVideo: React.RefObject<HTMLVideoElement>;
//     stream: MediaStream | undefined;
//     acceptorName: string;
//     callUser: (params: { id: string; acceptorName: string }) => void;
//     setCallingInfo: React.Dispatch<React.SetStateAction<CallingInfo>>;
//     callEnded: boolean;
//     leaveCall: () => void;
//     answerCall: () => void;
//     isVideoCalling: boolean;
//     setIsVideoCalling: React.Dispatch<React.SetStateAction<boolean>>;
//     setIsMyCam: React.Dispatch<React.SetStateAction<boolean>>;
//     isMyCam: boolean;
// }

const PeerContext = createContext({});

export const PeerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const socket = getSocket();
    const userInfo = useSelector(selectCurrentUser) as userType;
    const [callAccepted, setCallAccepted] = useState(false);
    const [isVideoCalling, setIsVideoCalling] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [isMyCam, setIsMyCam] = useState(true);
    const [stream, setStream] = useState<MediaStream | undefined>();
    const [acceptorName, setAcceptorName] = useState('');
    const [callingInfo, setCallingInfo] = useState<CallingInfo>({ from: '', to: '', callerName: '', acceptorName: '', signal: null });
    const myVideo = useRef<HTMLVideoElement>(null);
    const userVideo = useRef<HTMLVideoElement>(null);
    const connectionRef = useRef<Peer.Instance | null>(null);

    useEffect(() => {
        socket.on('callUser', ({ from, to, callerName, acceptorName, signal }) => {
            setIsVideoCalling(true);
            setCallingInfo({ from, to, callerName, acceptorName, signal });
            console.log('calling......');
        });

        if (isVideoCalling) {
            navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                .then((currentStream) => {
                    setStream(currentStream);
                    if (myVideo.current) {
                        myVideo.current.srcObject = currentStream;
                    }
                })
                .catch((error) => {
                    console.error('Error getting media stream:', error);
                    setIsVideoCalling(false);
                });
        }
    }, [socket, isVideoCalling]);

    const callUser = ({ id, acceptorName }: { id: string; acceptorName: string }) => {
        const peer = new Peer({ initiator: true, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.emit('callUser', { receiver: id, signalData: data, sender: userInfo?._id, callerName: `${userInfo?.name}`, acceptorName });
            setAcceptorName(acceptorName);
            setIsVideoCalling(true);
        });

        peer.on('stream', (currentStream) => {
            if (userVideo.current) {
                userVideo.current.srcObject = currentStream;
            }
        });

        socket.on('callAccepted', (
            signal) => {
            setCallAccepted(true);
            peer.signal(signal);
        });
        connectionRef.current = peer;
    };

    const answerCall = () => {
        setCallAccepted(true);
        const peer = new Peer({ initiator: false, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.emit('answerCall', { signal: data, from: callingInfo.from, to: callingInfo.to });
        });

        peer.on('stream', (currentStream) => {
            if (userVideo.current) {
                userVideo.current.srcObject = currentStream;
            }
        });

        peer.signal(callingInfo.signal);

        connectionRef.current = peer;
    };

    const leaveCall = () => {
        setCallEnded(true);
        if (connectionRef.current) {
            connectionRef.current.destroy();
        }

        window.location.reload();
    };

    const value = {
        callingInfo,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        acceptorName,
        callUser,
        setCallingInfo,
        callEnded,
        leaveCall,
        answerCall,
        isVideoCalling,
        setIsVideoCalling,
        setIsMyCam,
        isMyCam,
    };

    return <PeerContext.Provider value={value}>{children}</PeerContext.Provider>;
};

export default PeerContext;