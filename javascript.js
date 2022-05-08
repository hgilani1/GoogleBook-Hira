const urlBase = "https://www.googleapis.com/books/v1/volumes?q=";

getSearchUrl = (searchTerm) => {
  return urlBase + searchTerm;
};

const search = async (searchTerm) => {
  const requestPromise = fetch(getSearchUrl(searchTerm));
  const response = await requestPromise;
  const searchData = await response.json();
  console.log(searchData);

  const publishers = searchData.items.map((volume) => {
    const output = {};
    if (volume.volumeInfo.authors) output.author = volume.volumeInfo.authors[0];
    else output.author = "Unknown";
    output.publisher = volume.volumeInfo.publisher;
    output.title = volume.volumeInfo.title;
    output.image = volume.volumeInfo.imageLinks.small;
    output.description = volume.volumeInfo.description;

    return output;
  });
  console.log(publishers);
};

const superSearch = async (searchTerm) => {
  const requests = [];
  for (let i = 0; i < 40000; i++) {
    const requestPromise = fetch(getSearchUrl(searchTerm));
  }

  console.log(requests.length);
};

const displaySearch = document.getElementById("submit");
displaySearch.addEventListener("click", () => search());

const inputSearchResult = (search) => {
  document.getElementById("result").innerText = search;
};
