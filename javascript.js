// data from URL
const urlBase = "https://www.googleapis.com/books/v1/volumes?q=";

const getSearchUrl = (searchTerm) => {
  return urlBase + searchTerm;
};

// search function
const search = async (searchTerm) => {
  const requestPromise = fetch(getSearchUrl(searchTerm));
  const response = await requestPromise;
  console.log(response);
  const searchData = await response.json();
  console.log(searchData);

  // search result function
  const searchResult = searchData.items.map((book) => {
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

  // loop for search result
  for (let i = 0; i < 10; i++) {
    document.getElementById("resultimage" + i).src = searchResult[i].Image;
    document.getElementById(
      "resulttitle" + i
    ).innerText = `Title: ${searchResult[i].Title}`;
    document.getElementById(
      "resultauthor" + i
    ).innerHTML = `Author: ${searchResult[i].Author}`;
    document.getElementById(
      "resultdescription" + i
    ).innerText = `Descripton: ${searchResult[i].Description}`;
  }
  console.log(searchResult);
};

// submit button - event listener
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const searchbar = document.getElementById("searchbar").value;
  search(searchbar);
});
