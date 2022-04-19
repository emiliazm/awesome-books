import BookCollection from "./book-collection.js";

export default class UI {
  static #bookListElement = document.querySelector('.book-list');
  static #bookElement = document.querySelector('.book');
  static addBook(book) {
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
    BookCollection.books.forEach((book) => this.addBook(book));
  }
}