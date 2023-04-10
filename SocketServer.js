let onlineUsers = []
const addUser = (userId, socketId) => {
    !onlineUsers.some(user => user.userId === userId) && onlineUsers.push({ userId, socketId });
}

const removeUser = socketId => {
    onlineUsers = onlineUsers.filter(user => user.socketId !== socketId);
};
const getUser = (userId) => {
    return onlineUsers.find((user) => user.userId === userId);
};

const findConnectedUser = userId =>
    onlineUsers.find(user => user.userId === userId);

const SocketServer = (socket) => {
    socket.on('join', (userId) => {
        addUser(userId, socket.id);
        socket.emit("getusers", onlineUsers);

    });

    const handler = (sender, receiver, { type, reactionType, post }) => {
        const receiverSocket = findConnectedUser(receiver.username);
        if (receiverSocket && sender.id != receiver.id) {
            io.to(receiverSocket.socketId)
                .emit('notificationReceived', {
                    sender,
                    receiverUsername: receiver.username,
                    type,
                    reactionType,
                    post,
                });
        }
    };

    //#region //!Messages

    socket.on("Message", ({ sender, receiver, createdAt, image, chatId, msg }) => {
        const user = getUser(receiver);
        if (user) {
            socket.to(user.socketId)
                .emit("MessagetoClient", { sender, receiver, createdAt, chatId, image, msg });
        }
    });

    socket.on('typing', ({ sender, receiver, chatId, status }) => {
        const user = getUser(receiver);
        if (user) {
            socket.to(user.socketId)
                .emit("TypingtoClient", { sender, receiver, chatId, status });
        }
    });
    socket.on("callUser", ({ receiver, signalData, sender, callerName, acceptorName }) => {
        const user = getUser(receiver);
        // console.log({ receiver, sender, callerName, acceptorName  })
        if (user) {
            socket.to(user.socketId)
                .emit("callUser", { signal: signalData, to: sender, from: receiver, callerName, acceptorName });
        }
    });

    socket.on("answerCall", ({ signal, to, from }) => {
        console.log({ signal, to, from })
        const user = getUser(to);
        if (user) {
            socket.to(user.socketId)
                .emit("callAccepted", signal)
        }
    });

    socket.on('disconnect', () => {
        removeUser(socket.id);
    });
}

module.exports = SocketServer