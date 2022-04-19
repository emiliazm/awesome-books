import Book from './book.js';
import Store from './store.js';

export default class BookCollection {
  static get books() {
    return Store.books;
  }

  static get nextId() {
    return Store.nextId;
  }

  static add(book) {
    const { books } = Store;
    books.push(book);
    Store.books = books;
    return book;
  }

  static addBook(title, author) {
    const id = Store.nextId;
    const newBook = new Book(id, title, author);
    return BookCollection.add(newBook);
  }

  static remove(id) {
    const books = BookCollection.books.filter((book) => book.id !== id);
    Store.books = books;
  }
}