let books = [];
function add(title, author) {
  const book = {
    title, author,
  };
  books.push(book);
}
function remove(title, author) {
  books = books.filter((book) => book.title !== title || book.author !== author);
  console.log(books);
}
function fillValues(card, book) {
  card.querySelector('.title').textContent = book.title;
  card.querySelector('.author').textContent = book.author;
  card.querySelector('button').addEventListener('click', () => {
    remove(book.title, book.author);
  });
}
function showBooks() {
  const container = document.querySelector('.book-list');
  const template = document.querySelector('.book');
  books.forEach((book) => {
    const card = template.cloneNode(true);
    fillValues(card, book);
    container.appendChild(card);
  });
  template.remove();
}

// test
add('cien años', 'garcia');
add('rayuela', 'cortazar');
console.log(books);
remove('rayuela', 'cortazar');
console.log(books);
showBooks();