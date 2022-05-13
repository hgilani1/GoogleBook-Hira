// attemp to make modules
import { searchResult } from "./DOM.js";

export const urlBase = "https://www.googleapis.com/books/v1/volumes?q=";

export const getSearchUrl = (searchTerm) => {
  return urlBase + searchTerm;
};

export const search = async (searchTerm) => {
  const requestPromise = fetch(getSearchUrl(searchTerm));
  const response = await requestPromise;
  console.log(response);
  const searchData = await response.json();
  console.log(searchData);
  return searchData;
};
