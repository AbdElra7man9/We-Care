'use client';
import { io, Socket } from 'socket.io-client';

const url = process.env.server as string;
let socket: Socket;

const getSocket = (): Socket => {
    if (!socket) {
        socket = io(url, {
            withCredentials: true
        });
    }
    return socket;
};

export default getSocket;
