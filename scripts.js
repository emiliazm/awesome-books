let books = [];
function add(title, author) {
  const book = {
    title, author,
  };
  books.push(book);
}

function addBook() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  add(title, author);
  showBooks();
}

function remove(title, author) {
  books = books.filter((book) => book.title !== title || book.author !== author);
  showBooks()
}

function fillValues(card, book) {
  card.querySelector('.title').textContent = book.title;
  card.querySelector('.author').textContent = book.author;
  card.querySelector('button').addEventListener('click', () => {
    remove(book.title, book.author);
  });
}

function clearBookList(container) {
  container.innerHTML = "";
}

function showBooks() {
  const container = document.querySelector('.book-list');
  const template = document.querySelector('.book');
  template.style.display='block';
  clearBookList(container);
  books.forEach((book) => {
    const card = template.cloneNode(true);
    fillValues(card, book);
    container.appendChild(card);
  });
  template.style.display = 'none';
}
