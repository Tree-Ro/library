const myLibrary = [
    {
        title: 'The Hobbit',
        author: 'J.R.R Tolkien',
        pages: 295,
        readStatus: true,
    },
    {
        title: 'Harry Potter',
        author: 'Witch101',
        pages: 311,
        readStatus: false,
    },
];
const shelf = document.querySelector('.shelf');
const newBookButton = document.querySelector('.new-entry-button');
const newBookModal = document.querySelector('.new-book');
const modalSubmitButton = document.querySelector("button[type='submit']");

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

newBookButton.addEventListener('click', () => {
    newBookModal.showModal();
});
modalSubmitButton.addEventListener('click', () => {
    const book1 = new Book(
        title.value,
        author.value,
        pages.value,
        readStatus.checked
    );

    addBookToLibrary(book1);

    displayBooks([book1]);

    document.querySelector('.new-book form').reset();
    console.log('hello');
});

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks(array) {
    array.forEach((obj) => {
        const card = document.createElement('div');
        if (obj.readStatus) {
            card.setAttribute('class', 'card-read');
        } else {
            card.setAttribute('class', 'card-unread');
        }
        shelf.appendChild(card);

        card.appendChild(document.createElement('p')).textContent =
            'Title: ' + obj.title;

        card.appendChild(document.createElement('p')).textContent =
            'Author: ' + obj.author;

        card.appendChild(document.createElement('p')).textContent =
            'Pages: ' + obj.pages;

        card.appendChild(document.createElement('button')).textContent =
            'Edit Entry';

        card.setAttribute('data-index', myLibrary.indexOf(obj));
    });
}

displayBooks(myLibrary);
