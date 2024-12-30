document.addEventListener('DOMContentLoaded', () => {
  // Define store for all our books
  const myLibrary = [];
  
  const dialog = document.getElementById('newBookModal');
  const showButton = document.querySelector('.new-book');
  const closeButton = document.getElementById('closeModal');

  const form = document.querySelector('#newBookModal form');

  form.addEventListener('submit', (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Get the values from the input fields
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  // Create a new Book object and add it to the myLibrary array
  const newBook = new Book(title, author);
  myLibrary.push(newBook);

  // Update the display
  displayLibrary();

  // Close the dialog
  dialog.close();
});

  showButton.addEventListener('click', () => {
    dialog.showModal();
  })

  closeButton.addEventListener('click', () => {
    dialog.close()
  })

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
    container.innerHTML = ''; // Clear the container
    
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