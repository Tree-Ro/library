//Books saved in storage will possibly loose their access to the Book.prototype?
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
Book.prototype.toggleReadState = function () {
    this.readStatus = !this.readStatus;
    refreshBookLog(myLibrary);
};

function retrofitOld() {
    //Ment to RetroFit old bookdata so that it may be used with the Book object
    myLibrary.forEach((bookData) => {
        const fittedBook = new Book(
            bookData.title,
            bookData.author,
            bookData.pages,
            bookData.readStatus
        );

        myLibrary[myLibrary.indexOf(bookData)] = fittedBook;
    });
}

function initialiseButtons() {
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
    });
}

function refreshBookLog(array) {
    document.querySelector(
        '.lib-log .total-books'
    ).textContent = `Total: ${myLibrary.length}`;

    let finished = 0;
    let unfinished = 0;
    array.forEach((book) => {
        if (book.readStatus === true) {
            ++finished;
        } else if (book.readStatus === false) {
            ++unfinished;
        }
    });

    document.querySelector(
        '.lib-log .finished-books'
    ).textContent = `Finished: ${finished}`;
    document.querySelector(
        '.lib-log .unfinished-books'
    ).textContent = `Unfinished ${unfinished}`;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks(array) {
    array.forEach((obj) => {
        const card = document.createElement('div');
        const button = document.createElement('button');
        if (obj.readStatus) {
            card.setAttribute('class', 'card-read');
            button.textContent = 'Completed';
            card.appendChild(button);
        } else {
            card.setAttribute('class', 'card-unread');
            button.textContent = 'Incomplete';
            card.appendChild(button);
        }
        shelf.appendChild(card);

        card.appendChild(document.createElement('p')).textContent =
            'Title: ' + obj.title;

        card.appendChild(document.createElement('p')).textContent =
            'Author: ' + obj.author;

        card.appendChild(document.createElement('p')).textContent =
            'Pages: ' + obj.pages;

        const closeIcon = document.createElement('img');
        closeIcon.setAttribute('src', 'icons/close.svg');
        closeIcon.setAttribute('width', '30');

        card.appendChild(closeIcon);

        closeIcon.addEventListener('click', function () {
            this.parentNode.remove();

            const dataIndex = this.parentNode.getAttribute('data-index');
            myLibrary.splice(dataIndex, 1);
        });

        card.setAttribute('data-index', myLibrary.indexOf(obj));

        button.addEventListener('click', function () {
            const dataIndex = this.parentNode.getAttribute('data-index');
            myLibrary[dataIndex].toggleReadState();

            parent = this.parentNode;
            if (parent.getAttribute('class') === 'card-read') {
                parent.setAttribute('class', 'card-unread');
                this.textContent = 'Incomplete';
            } else {
                parent.setAttribute('class', 'card-read');
                this.textContent = 'Complete';
            }
        });
    });
    refreshBookLog(myLibrary);
}

retrofitOld();
initialiseButtons();
displayBooks(myLibrary);
