const myLibrary = []

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title
        this.author = author
        this.pages = pages
        this.isRead - isRead
    }
}

// function Book(title, author, pages, read) {
//     
//         this.title = title,
//         this.author = author,
//         this.pages = pages,
//         this.isRead = read
// }

function getReadStatus(book) {
    return book.isRead ? 'Already read' : 'Haven\'t been read';
}

function displayBook() {
    while (bookContainer.hasChildNodes()) {
        bookContainer.removeChild(bookContainer.firstChild)
    }
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('card');
        const titlePara = document.createElement('p');
        const authorPara = document.createElement('p');
        const pagesPara = document.createElement('p');
        const isReadPara = document.createElement('p');
        const readButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        titlePara.textContent = `Title: ${book.title}`;
        authorPara.textContent = `Author: ${book.author}`;
        pagesPara.textContent = `Pages: ${book.pages}`;
        isReadPara.textContent = `${getReadStatus(book)}`;
        readButton.textContent = 'Read';
        deleteButton.textContent = 'Delete';

        readButton.addEventListener('click', e => {
            book.isRead ? book.isRead = false : book.isRead = true;
            isReadPara.textContent = getReadStatus(book)
        })

        deleteButton.addEventListener('click', e => {
            card.remove()
            myLibrary.splice(myLibrary.indexOf(book), 1)
        })

        card.append(titlePara, authorPara, pagesPara, isReadPara, readButton, deleteButton);
        bookContainer.append(card);
    })
}

const form = document.querySelector('#form')
const bookContainer = document.querySelector('.book-container')
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const isReadInput = document.querySelector('#is-read');
const formButton = document.querySelector('#form-button')

function addBookToLibrary() {
    if (titleInput.value === '' || authorInput.value === '' || pagesInput.value === '') {
        alert('Please fill the form')
    } else {
        myLibrary.push(new Book(titleInput.value, authorInput.value, pagesInput.value, isReadInput.checked))
        form.reset()
    }
}

formButton.addEventListener('click', (e) => {
    e.preventDefault()
    addBookToLibrary()
    displayBook()
})


