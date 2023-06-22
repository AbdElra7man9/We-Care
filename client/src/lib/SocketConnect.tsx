
import { io, Socket } from 'socket.io-client';

const url = process.env.NEXT_PUBLIC_API_KEY
let socket:Socket;
const getSocket = () => {
    if (!socket) {
        socket = io(url, {
            withCredentials: true
        });
    }
    return socket
}

export default getSocket