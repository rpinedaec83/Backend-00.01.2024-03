const socket = io();

export const loadMessages = (callback) => {
    socket.on("server:loadmessages", callback);
};

export const saveMessage = (user, content) => {
    socket.emit('client:newmessage', {
        user,
        content
    });
};

export const onNewMessage = (callback) => {
    socket.on('server:newmessage', callback);
};

export const deleteMessage = id => {
    socket.emit('client:deletemessage', id);
};

export const getMessageById = id => {
    socket.emit('client:getmessage', id);
};

export const onMessageSelected = (callback) => {
    socket.on('server:selectedmessage', callback);
};

export const updateMessage = (id, content) => {
    socket.emit("client:updatemessage", {
        _id: id,
        content,
    });
};