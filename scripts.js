import BookCollection from './classes/book-collection.js';
import UI from './classes/ui.js';

document.addEventListener('DOMContentLoaded', UI.displayBooks());
document.querySelector('#addButton').addEventListener('click', (e) => {
  const titleElement = document.querySelector('#title');
  const authorElement = document.querySelector('#author');
  const title = titleElement.value.trim();
  const author = authorElement.value.trim();

  if (title === '' || author === '') {
    e.preventDefault();
  } else {
    const book = BookCollection.addBook(title, author);
    UI.addBook(book);
    titleElement.value = '';
    authorElement.value = '';
  }
});

const listLi = document.querySelector('.list-li');
const sideBorder = document.querySelector('.sideBorder');
const contactLi = document.querySelector('.contact-li');
const bookList = document.querySelector('#bookList');
const bookForm = document.querySelector('#bookForm');
const contact = document.querySelector('#contact');

listLi.addEventListener('click', () => {
  bookList.classList.remove('hidden');
  bookForm.classList.add('hidden');
  contact.classList.add('hidden');
});

sideBorder.addEventListener('click', () => {
  bookList.classList.add('hidden');
  bookForm.classList.remove('hidden');
  contact.classList.add('hidden');
});

contactLi.addEventListener('click', () => {
  bookList.classList.add('hidden');
  bookForm.classList.add('hidden');
  contact.classList.remove('hidden');
});
