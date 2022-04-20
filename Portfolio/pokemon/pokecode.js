const getAPIData = async (url) => {
  try {
    const result = await fetch(url);
    return await result.json();
  } catch (error) {
    console.error(error);
  }
};

const loadedPokemon = []

async function loadPokemon(offset = 0, limit = 25) {
  const pokeData = await getAPIData(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  for (const nameURL of pokeData.results) {
    const pokemon = await getAPIData(nameURL.url);
    const simplePokemon = {
      id: pokemon.id,
      height: pokemon.height,
      weight: pokemon.weight,
      name: pokemon.name,
      types: pokemon.types,
      abilities: pokemon.abilities,
      moves: pokemon.moves.slice(0, 3),
    };
    loadedPokemon.push(simplePokemon)
    populatePokeCard(simplePokemon);
  }
}

class Pokemon {
  constructor(name, height, weight, abilities, types) {
    (this.id = 9002),
      (this.name = name),
      (this.height = height),
      (this.weight = weight),
      (this.abilities = abilities),
      (this.types = types);
  }
}

const newButton = document.createElement("button");
newButton.textContent = "New Pokemon";
const header = document.querySelector("header");
header.appendChild(newButton);
newButton.addEventListener("click", () => {
  const pokeName = prompt("Choose a name for your new pokemon", "Newmon");
  const pokeHeight = prompt("Choose a Height for your new pokemon", "6");
  const pokeWeight = prompt("Choose a Weight for your new pokemon", "100");
  const pokeAbilities = prompt(
    "Choose the Abilities for your new pokemon (seperate multiple by a comma)",
    "Wonder Guard"
  );
  const pokeTypes = prompt(
    "Choose the Type(s) for your new pokemon (seperate multiple by a comma)",
    "Normal"
  );
  //add moves arrray and moves prompt.//

  const newPokemon = new Pokemon(
    pokeName,
    pokeHeight,
    pokeWeight,
    makeAbilitiesArray(pokeAbilities),
    makeTypeArray(pokeTypes)
  );
  console.log(newPokemon);
  populatePokeCard(newPokemon);
});

function makeAbilitiesArray(commaString) {
  return commaString.split(",").map((abilityName) => {
    return {
      ability: { name: abilityName },
    };
  });
}

function makeTypeArray(commaString) {
  return commaString.split(",").map((typeName) => {
    return {
      type: { name: typeName },
    };
  });
}

const pokeGird = document.querySelector(".pokeGrid");

function populatePokeCard(pokemon) {
  const pokeScene = document.createElement("div");
  pokeScene.className = "scene";
  const pokeCard = document.createElement("div");
  pokeCard.className = "card";
  pokeCard.addEventListener("click", () =>
    pokeCard.classList.toggle("is-flipped")
  );

  pokeCard.appendChild(populateCardFront(pokemon));
  pokeCard.appendChild(populateCardBack(pokemon));
  pokeScene.appendChild(pokeCard);
  pokeGird.appendChild(pokeScene);
}

function populateCardFront(pokemon) {
  const pokeFront = document.createElement("figure");
  pokeFront.className = "cardFace front";
  const pokeType1 = pokemon.types[0].type.name
  pokeFront.style.setProperty('background', getPokeTypeColor(pokeType1))
  const pokeImg = document.createElement("img");
  if (pokemon.id === 9002) {
    pokeImg.src = "../images/pokeball.png";
  } else {
    pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  }
  const pokeCaption = document.createElement("figcaption");
  pokeCaption.innerHTML = pokemon.name;

  pokeFront.appendChild(pokeImg);
  pokeFront.appendChild(pokeCaption);
  return pokeFront;
}

function populateCardBack(pokemon) {
  const pokeBack = document.createElement("div");
  pokeBack.className = "cardFace back";
  const label = document.createElement("h4");
  label.textContent = "Abilities";
  pokeBack.appendChild(label);
  const abilityList = document.createElement("ul");
  pokemon.abilities.forEach((abilityItem) => {
    const listItem = document.createElement("li");
    listItem.textContent = abilityItem.ability.name;
    abilityList.appendChild(listItem);
  });
  pokeBack.appendChild(abilityList);
  return pokeBack;
}

function getPokeTypeColor(pokeType) {
  let color;
  switch (pokeType) {
    case "grass":
      color = "#78C850";
      break;
    case "bug":
      color = "#a8b820";
      break;
    case "dark":
      color = "#705848";
      break;
    case "dragon":
      color = "#7038f8";
      break;
    case "electric":
      color = "#f8d030";
      break;
    case "fairy":
      color = "#ee99ac";
      break;
    case "fighting":
      color = "#c03028";
      break;
    case "fire":
      color = "#f08030";
      break;
    case "flying":
      color = "#a890f0";
      break;
    case "ghost":
      color = "#705898";
      break;
    case "ground":
      color = "#e0c068";
      break;
    case "ice":
      color = "#98d8d8";
      break;
    case "normal":
      color = "#a8a878";
      break;
    case "poison":
      color = "#a040a0";
      break;
      case "psychic":
      color = "#f85888";
      break;
      case "rock":
      color = "#b8a038";
      break;
      case "steel":
      color = "#b8b8d0";
      break;
      case "water":
      color = "#6890f0";
      break;
  }
  return color
}

await loadPokemon(0, 250);

function getPokemonByType(type) {
  return loadedPokemon.filter((pokemon) => pokemon.types[0].type.name === type)};

