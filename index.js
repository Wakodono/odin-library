document.addEventListener('DOMContentLoaded', () => {
  const myLibrary = [];

  const dialog = document.getElementById('newBookModal');
  const showButton = document.querySelector('.new-book');
  const closeButton = document.getElementById('closeModal');
  const form = document.querySelector('#newBookModal form');

  showButton.addEventListener('click', () => {
    dialog.showModal();
  });

  closeButton.addEventListener('click', () => {
    dialog.close();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    const newBook = new Book(title, author);
    myLibrary.push(newBook);

    displayLibrary();

    form.reset();

    dialog.close();
  });

  function Book(title, author) {
    this.title = title;
    this.author = author;
  }

  function createBookCard(book, index) {
    const card = document.createElement('div');
    card.classList.add('card');

    const bookTitle = document.createElement('h2');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = book.title;

    const authorTag = document.createElement('p');
    authorTag.classList.add('author');
    authorTag.textContent = book.author;

    // Add a button on each book’s display to remove the book
    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerText = '❌';
    remove.setAttribute('data-index', index);

    remove.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index');
      myLibrary.splice(index, 1);
      displayLibrary();
    });

    card.appendChild(bookTitle);
    card.appendChild(authorTag);
    card.appendChild(remove);

    return card;
  }

  function displayLibrary() {
    const container = document.querySelector('.display');
    container.innerHTML = '';

    myLibrary.forEach((book, index) => {
      const card = createBookCard(book, index);
      container.appendChild(card);
    });
  }
});