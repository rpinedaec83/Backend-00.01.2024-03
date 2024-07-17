const socket = io();

// Función para agregar un libro a la lista en el DOM
const addBookToList = (book) => {
  const booksDiv = document.getElementById('books');
  const bookElement = document.createElement('div');
  bookElement.textContent = `${book.title} por ${book.author} - $${book.price}`;
  booksDiv.appendChild(bookElement);
};

// Obtener todos los libros al cargar la página
fetch('/api/books')
  .then(response => response.json())
  .then(books => {
    books.forEach(book => {
      addBookToList(book);
    });
  });

// Enviar nuevo libro al servidor
document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const price = document.getElementById('price').value;
  const stock = document.getElementById('stock').value;

  fetch('/api/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, author, price, stock }),
  })
  .then(response => response.json())
  .then(book => {
    addBookToList(book);
  });

  // Limpiar el formulario
  e.target.reset();
});

// Escuchar nuevos libros en tiempo real
socket.on('newBook', (book) => {
  addBookToList(book);
});
