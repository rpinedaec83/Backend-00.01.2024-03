import app from './app';
import { Server as SocketServer } from 'socket.io';
import http from 'http';
import registerSocketEvents from './sockets';
import { initializeDB } from './db';

initializeDB();

const server = http.createServer(app);
const httpServer = server.listen(3000, () => {
  console.log('Server is up and running on port 3000');
});

const io = new SocketServer(httpServer);

registerSocketEvents(io);