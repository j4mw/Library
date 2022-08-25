function Book(title, author, pages, isbn, bookRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isbn = isbn;
  this.bookRead = bookRead;
}

const userBook1 = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "300",
  "978-0547928227",
  false
);

const userBook2 = new Book(
  "A Game of Thrones",
  "George R.R. Martin",
  "900",
  "978-0007548231",
  false
);

let myLibrary = [userBook1, userBook2];

function updateLibrary() {
  for (let i = 0; i < myLibrary.length; i += 1) {
    createBook(myLibrary[i]);
  }
}

function addBookToLibrary() {}

function createBook(book) {
  let cardContainer;
  cardContainer = document.getElementsByClassName("card-container");
  // card create
  let card = document.createElement("div");
  card.className = "card";
  card.style = "width: 14rem";
  // card body create
  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  // card image create
  let bookImg = document.createElement("img");
  bookImg.className = "card-img-top";
  bookImg.style = "aspect-ratio: 1/1.4";
  bookImg.src = `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`;
  // card title create
  let cardTitle = document.createElement("h5");
  cardTitle.className = "card-title title";
  cardTitle.textContent = book.title;
  // card author create
  let cardAuthor = document.createElement("p");
  cardAuthor.className = "card-text author";
  cardAuthor.textContent = book.author;
  // card pages create
  let cardPages = document.createElement("p");
  cardPages.className = "card-text pages";
  cardPages.textContent = book.pages + " pages";
  // card ISBN create
  let cardISBN = document.createElement("p");
  cardISBN.className = "card-text isbn";
  cardISBN.textContent = book.isbn;
  // amazon link button create
  let cardAmzn = document.createElement("a");
  cardAmzn.className = "btn btn-warning";
  cardAmzn.style =
    "width: 100px; height:38px;padding: 6px 12px;margin: 0px 0px 16px 16px;";
  cardAmzn.textContent = "Amazon";
  cardAmzn.href = `https://www.amazon.co.uk/s?k=${book.isbn}&crid=RW6V6ZLAA408&sprefix=978-0007548231%2Caps%2C97&ref=nb_sb_noss`;
  // card delete button
  let cardDelete = document.createElement("p");
  cardDelete.className = "btn btn-danger";
  cardDelete.textContent = "Delete";
  cardDelete.style =
    "width: 72px; height:38px;padding: 6px 12px;margin: 0px 0px 16px";
  // appending features to card
  card.appendChild(bookImg);
  card.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardAuthor);
  cardBody.appendChild(cardPages);
  cardBody.appendChild(cardISBN);
  cardBody.appendChild(cardDelete);
  cardBody.appendChild(cardAmzn);
  // appending card to container
  cardContainer[0].appendChild(card);
}

updateLibrary();
