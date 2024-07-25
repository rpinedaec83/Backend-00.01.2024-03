const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const Book = require('./models/Book');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect('mongodb+srv://jossecap:P%40$w0rd25.BD@cluster0.f96yqvy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
});

app.use(express.static('public'));
app.use(express.json());

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Ruta para obtener todos los libros
app.get('/api/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Ruta para agregar un nuevo libro
app.post('/api/books', async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();

  // Emitir evento a todos los clientes  
  // io.emit('newBook', newBook); 

  res.status(201).json(newBook);
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
