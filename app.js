const characterList = document.getElementById("lista");
const newCharacterName = document.createElement("li");
const searchBtn = document.getElementById("search-btn");
const searchField = document.getElementById("filter-field");
async function getData() {
  url = "https://rickandmortyapi.com/api/character";
  const data = fetch(url)
    .then((res) => res.json())
    .then((res) => {
      characterList.innerHTML = "";
      const { info, results } = res;
      for (const character of results) {
        if (character.name.includes(searchField.value)) {
          const newCharacterName = document.createElement("li");
          newCharacterName.textContent = character.name;
          characterList.append(newCharacterName);
        }
      }
    });
}
searchBtn.addEventListener("click", getData);
