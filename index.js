import Book from './js/book.js';
import BookShelf from './js/bookshelf.js';
import data from './js/bookData.js';

console.log('hello from index.js')
const shelfIns = new BookShelf();

//seed functionality
for (const book of data) {
    const bookIns = new Book(book.author, book.language, book.subject, book.title);
    // console.log('book ins', bookIns);
    shelfIns.addBook(bookIns);
}

const all = document.querySelector('#all')
const favs = document.querySelector('#favs')
const select = document.querySelector('#dropdown')
const addBook = document.querySelector('#addBook')
const submitNewBook = document.querySelector("#addBookButton")

all.addEventListener('click', () => {
    shelfIns.render();
})

favs.addEventListener('click', () => {
    shelfIns.renderFavorites();
})

select.addEventListener('change', () => {
    // console.log('select', select.value)
    if (select.value === 'alphabetical') {
        // console.log('select', select.value)
        shelfIns.renderAlpha();
    }
    if (select.value === 'reverse') {
        // console.log('select', select.value)
        shelfIns.renderReverse();
    }
    if (select.value === 'topics') {
        // console.log('select', select.value)
        shelfIns.renderTopics();
    }
})

// Try to prevent reload

submitNewBook.addEventListener('click', (e) => {
    e.preventDefault();
    const bookTitle = document.getElementById("title").value;
    const bookAuthor = document.getElementById("author").value;
    const bookLang = document.getElementById("lang").value;
    const bookSub = document.getElementById("sub").value;

    const newBookin = new Book(bookAuthor, bookLang, bookSub, bookTitle);

    shelfIns.addBook(newBookin);

    console.log(shelfIns)
})





//querySelectorAll the rendered books, then sort and re-render --> this works for favs and all


