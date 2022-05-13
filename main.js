// attemp to make modules
import { urlBase, search, getSearchUrl } from "./module.js";

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const searchbar = document.getElementById("searchbar").value;
  search(searchbar);
});
