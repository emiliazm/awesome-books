export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  toString() {
    return `"${this.title}" by ${this.author}`;
  }
}