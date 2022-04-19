import Book from './book.js';

export default  class Store {
  static #idKey = 'idKey';

  static #booksKey = 'books';

  static get books() {
    return JSON.parse(localStorage.getItem(Store.#booksKey) || '[]', (key, value) => {
      if (key !== '' && !Number.isNaN(parseInt(key))) return new Book(value.id, value.title, value.author);
      return value;
    });
  }

  static set books(books) {
    return localStorage.setItem(Store.#booksKey, JSON.stringify(books));
  }

  static get nextId() {
    const id = parseInt(localStorage.getItem('bookId') || '0', 10) + 1;
    localStorage.setItem(Store.#idKey, id);
    return id;
  }
}