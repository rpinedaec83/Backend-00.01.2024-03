import Message from "./models/Message";

export default (io) => {
  io.on("connection", (socket) => {
    const loadMessages = async () => {
      const messages = await Message.find();
      io.emit("server:loadmessages", messages);
    };

    loadMessages();

    socket.on("client:newmessage", async (data) => {
      const newMessage = new Message(data);
      const savedMessage = await newMessage.save();
      io.emit("server:newmessage", savedMessage);
    });

    socket.on("client:deletemessage", async (id) => {
      await Message.findByIdAndDelete(id);
      loadMessages();
    });

    socket.on("client:getmessage", async (id) => {
      const message = await Message.findById(id);
      io.emit('server:selectedmessage', message);
    });

    socket.on("client:updatemessage", async (updatedMessage) => {
      await Message.findByIdAndUpdate(updatedMessage._id, {
        content: updatedMessage.content
      });
      loadMessages();
    });
  });
};