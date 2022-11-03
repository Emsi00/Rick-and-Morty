const searchField = document.getElementById("filter-field");
const searchBtn = document.getElementById("search-btn");
const characterList = document.getElementById("lista");
const container = document.getElementById("container");

async function getData() {
  BASE_URL = "https://rickandmortyapi.com/api/character";
  const data = fetch(BASE_URL)
    .then((res) => res.json())
    .then((res) => {
      // createFiltredArray(res, searchField);
      console.log(res);
      res.results
        .filter(({ species }) => species === "Human")
        .map(({ name }) => {
          const nameDiv = document.createElement("div");
          nameDiv.innerHTML = name;
          nameDiv.id = "name" + name;
          container.appendChild(nameDiv);
        });
    });
}
console.log("chuj");

searchBtn.addEventListener("click", getData);
