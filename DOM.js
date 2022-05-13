// attemp to make modules

import { searchData } from "./module";

export const searchResult = searchData.items.map((book) => {
  const bookInfo = {};
  if (book.volumeInfo.author) {
    bookInfo.Author = book.volumeInfo.Author;
  } else {
    bookInfo.Author = "Unknown";
  }
  if (book.volumeInfo.title) {
    bookInfo.Title = book.volumeInfo.title;
  } else {
    bookInfo.Title = "Unkown";
  }
  if (book.volumeInfo.imageLinks.small) {
    bookInfo.Image = book.volumeInfo.Image.small;
  } else {
    bookInfo.Image = "Unkown";
  }
  if (book.volumeInfo.description) {
    bookInfo.Description = book.volumeInfo.description;
  } else {
    bookInfo.Description = "Unkown";
  }

  bookInfo.Author = book.volumeInfo.authors;
  bookInfo.Title = book.volumeInfo.title;
  bookInfo.Description = book.volumeInfo.description;
  bookInfo.Image = book.volumeInfo.imageLinks.smallThumbnail;
  return bookInfo;
});

// for (let i = 0; i < 10; i++) {
//   document.getElementById("resultimage" + i).src = searchResult[i].Image;
//   document.getElementById(
//     "resulttitle" + i
//   ).innerText = `Title: ${searchResult[i].Title}`;
//   document.getElementById(
//     "resultauthor" + i
//   ).innerHTML = `Author: ${searchResult[i].Author}`;
//   document.getElementById(
//     "resultdescription" + i
//   ).innerText = `Descripton: ${searchResult[i].Description}`;
// }
