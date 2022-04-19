export default  class Store {
  static #idKey = 'idKey';

  static #booksKey = 'books';

  static get books() {
    return JSON.parse(localStorage.getItem(Store.#booksKey) || '[]');
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