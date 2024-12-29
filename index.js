document.addEventListener('DOMContentLoaded', () => {
  // Define store for all our books
  const myLibrary = [];

  function Book(title, author) {
    this.title = title;
    this.author = author;
  }

  function createBookCard(book) {
    // Create a card element
    const card = document.createElement('div');
    card.classList.add('card');

    // Create a title element
    const bookTitle = document.createElement('h2');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = book.title;

    // Create an author element
    const authorTag = document.createElement('p');
    authorTag.classList.add('author');
    authorTag.textContent = book.author;

    // Append the title and author elements to the card element
    card.appendChild(bookTitle);
    card.appendChild(authorTag);

    // Return the card element
    return card;
  }

  function displayLibrary() {
    // Select the container where the cards will be displayed
    const container = document.querySelector('.display');

    // Loop through the myLibrary array
    myLibrary.forEach(book => {
      // Create a card for the book using createBookCard function
      const card = createBookCard(book);
      // Append the card to the container
      container.appendChild(card);
    });
  }

  function addBookToLibrary(book) {
    myLibrary.push(book);
  }

  const exodus = new Book('Exodus', 'Moses');
  const psalms = new Book('Psalms', 'David');
  const mathew = new Book('Mathew', 'Mathew');
  const luke = new Book('Luke', 'Luke');

  addBookToLibrary(exodus);
  addBookToLibrary(psalms);
  addBookToLibrary(mathew);
  addBookToLibrary(luke);

  // Call displayLibrary to display all books
  displayLibrary();
});