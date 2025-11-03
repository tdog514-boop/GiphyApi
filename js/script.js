function endpoint(tag) {
  return `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}&rating=g`;
}

const apiKey = "hqsdJh6cVQX1jOnm9IxE4I1fYeqLUNDv";

const gifContainer = document.querySelector("#gif-container");
const fetchButton = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

const images = [];

fetchButton.addEventListener("click", async function () {
  const searchTerm = searchInput.value.trim() || "funny"; // default if empty
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchTerm}&rating=g`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const imageUrl = data.data.images.original.url;

    images.push(imageUrl);

    gifContainer.innerHTML = "";
    for (let url of images) {
      gifContainer.innerHTML += `<img src="${url}" class="col-3 mb-3">`;
    }

    console.log("Fetched image URL:", imageUrl);
    console.log("All images:", images);
  } catch (error) {
    console.error("Error fetching GIF:", error);
  }
});
