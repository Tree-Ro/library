const myLibrary = [
    {
        title: 'The Hobbit',
        author: 'J.R.R Tolkien',
        pages: 295,
        readStatus: 'card-read',
    },
    {
        title: 'Harry Potter',
        author: 'Witch101',
        pages: 311,
        readStatus: 'card-unread',
    },
];
const shelf = document.querySelector('.shelf');
const newBook = document.querySelector('.new-book');

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks(array) {
    array.forEach((obj) => {
        const card = document.createElement('div');
        card.setAttribute('class', obj.readStatus);
        shelf.appendChild(card);

        card.appendChild(document.createElement('p')).textContent =
            'Title: ' + obj.title;

        card.appendChild(document.createElement('p')).textContent =
            'Author: ' + obj.author;

        card.appendChild(document.createElement('p')).textContent =
            'Pages: ' + obj.pages;

        card.appendChild(document.createElement('button')).textContent =
            'Edit Entry';
    });
}

displayBooks(myLibrary);
