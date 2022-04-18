let books = [];

// STORAGE
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      // everything except Firefox
      && (e.code === 22
        // Firefox
        || e.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && storage
      && storage.length !== 0
    );
  }
}

const loadBooks = () => {
  books = JSON.parse(localStorage.getItem('books'));
};

const saveBooks = (books) => {
  localStorage.setItem('books', JSON.stringify(books));
};

function add(title, author) {
  const book = {
    title, author,
  };
  books.push(book);
  saveBooks(books);
}

function addBook() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  add(title, author);
  showBooks();
}

function remove(title, author) {
  books = books.filter((book) => book.title !== title || book.author !== author);
  saveBooks(books);
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
  loadBooks();
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

