import BookCollection from "./classes/book-collection.js";
import UI from "./classes/ui.js";

document.addEventListener('DOMContentLoaded', UI.displayBooks());
document.querySelector('#addButton').addEventListener('click', (e)=> {
  const title = document.querySelector('#title').value.trim();
  const author = document.querySelector('#author').value.trim();

  if (title === '' || author === '') {
    e.preventDefault();
  }else{
    const book = BookCollection.addBook(title, author);
    UI.addBook(book);
  }
})

/* let books = [];

// STORAGE

function getNewId() {
  const id = parseInt(localStorage.getItem('bookId') || '0', 10) + 1;
  localStorage.setItem('bookId', id);
  return id;
}

function loadBooks() {
  books = JSON.parse(localStorage.getItem('books') || '[]');
}

function fillValues(card, book) {
  card.querySelector('.title').textContent = book.title;
  card.querySelector('.author').textContent = book.author;
  card.querySelector('button').addEventListener('click', () => {
    // eslint-disable-next-line no-use-before-define
    remove(book.id);
  });
}

function clearBookList(container) {
  container.innerHTML = '';
}

function showBooks() {
  loadBooks();
  const container = document.querySelector('.book-list');
  const template = document.querySelector('.book');
  template.style.display = 'block';
  clearBookList(container);
  books.forEach((book) => {
    const card = template.cloneNode(true);
    fillValues(card, book);
    container.appendChild(card);
  });
  template.style.display = 'none';
}

function saveBooks(books) {
  localStorage.setItem('books', JSON.stringify(books));
}

function add(title, author) {
  const id = getNewId();
  const book = { id, title, author };
  books.push(book);
  saveBooks(books);
}

// eslint-disable-next-line no-unused-vars
function addBook() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  add(title, author);
  showBooks();
}

function remove(id) {
  books = books.filter((book) => book.id !== id);
  saveBooks(books);
  showBooks();
}

showBooks(); */