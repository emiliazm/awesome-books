import BookCollection from './book-collection.js';

export default class UI {
  static #bookListElement = document.querySelector('.book-list');

  static #bookElement = document.querySelector('.book');

  static #titleElement = document.querySelector('#title');

  static #authorElement = document.querySelector('#author');

  static #bookListMenu = document.querySelector('#bookList');

  static #bookFormMenu = document.querySelector('#bookForm');

  static #contactMenu = document.querySelector('#contact');

  static displayBook(book) {
    const card = UI.#bookElement.cloneNode(true);
    card.querySelector('.title-author').textContent = book.toString();
    card.querySelector('button').addEventListener('click', (event) => UI.removeBook(event, book));
    this.#bookListElement.appendChild(card);
  }

  static removeBook(event, book) {
    const buttonElement = event.target;
    const cardElement = buttonElement.parentElement;
    cardElement.remove();
    BookCollection.remove(book.id);
  }

  static displayBooks() {
    BookCollection.books.forEach((book) => this.displayBook(book));
  }

  static addNewBook(event) {
    const title = UI.#titleElement.value.trim();
    const author = UI.#authorElement.value.trim();

    if (title === '' || author === '') {
      event.preventDefault();
    } else {
      const book = BookCollection.addBook(title, author);
      UI.displayBook(book);
      UI.#titleElement.value = '';
      UI.#authorElement.value = '';
    }
  }

  static showSection(id) {
    if (id !== '') {
      UI.#bookListMenu.classList.toggle('hidden', (id !== 'goList'));
      UI.#bookFormMenu.classList.toggle('hidden', (id !== 'goForm'));
      UI.#contactMenu.classList.toggle('hidden', (id !== 'goCont'));
    }
  }
}