const searchField = document.getElementById("filter-field");
const searchBtn = document.getElementById("search-btn");
const characterList = document.getElementById("lista");

async function getData() {
  url = "https://rickandmortyapi.com/api/character";
  const data = fetch(url)
    .then((res) => res.json())
    .then((res) => {
      createFiltredArray(res, searchField);
    });
}

function createFiltredArray(arr, inputValue) {
  characterList.innerHTML = "";
  for (const hero of arr.results) {
    if (hero.name.includes(inputValue.value)) {
      renderList(hero);
    }
  }
}
function renderList(character) {
  const newCharacter = document.createElement("li");
  newCharacter.textContent = character.name;
  lista.append(newCharacter);
}
console.log("chuj");

searchBtn.addEventListener("click", getData);
