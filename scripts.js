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
