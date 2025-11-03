function endpoint(tag) {
  return `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}&rating=g`;
}

const apiKey = "hqsdJh6cVQX1jOnm9IxE4I1fYeqLUNDv";

const gifContainer = document.querySelector("#gif-container");
const fetchButton = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");
