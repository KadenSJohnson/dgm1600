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
      //items: pokemon.held_items.slice(0, 2),
    };
    loadedPokemon.push(simplePokemon)
    populatePokeCard(simplePokemon);
    //console.log(pokemon.sprites.back_default)
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
  const typeicon = document.createElement('img')
  typeicon.className = "typeicon"
  const pokeType1 = pokemon.types[0].type.name
  /*add pokeType2*/
  // add back sprites 
  pokeFront.style.setProperty('background', getPokeTypeColor(pokeType1))
  typeicon.src = getPokeIconType(pokeType1)
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
  pokeFront.appendChild(typeicon)
  return pokeFront;
}

function populateCardBack(pokemon) {
  const pokeBack = document.createElement("div");
  const backname = document.createElement('div')
  backname.className = 'backname'
  const dexsection1 = document.createElement('div')
  dexsection1.className = "dexsection1"
  const dexsection2 = document.createElement('div')
  dexsection2.className = "dexsection2"
  const weightlist = document.createElement("h4")
  weightlist.innerHTML =`Weight ${pokemon.weight}`
  const dexsection3 = document.createElement('div')
  dexsection3.className = "dexsection3"
  const heightlist = document.createElement("h4")
  heightlist.innerHTML = `Height ${pokemon.height}`
  const dexsection4 = document.createElement('div')
  dexsection4.className = "dexsection4"
  const typelist = document.createElement('h5')
  typelist.textContent = `Primary Type: ${pokemon.types[0].type.name}`
  if (pokemon.types[1]) 
  {
    const typeList2 = document.createElement('h5')
    typeList2.textContent = `Secondary Type: ${pokemon.types[1].type.name}`
    dexsection4.appendChild(typeList2)
  }
  
  const label = document.createElement("h4");
  const abilityList = document.createElement("ul");
  const pokeCaption = document.createElement('h4')
  pokeCaption.innerHTML = pokemon.name.split('-')[0];
  pokeBack.className = "cardFace back";
  label.textContent = "Abilities";
  dexsection1.appendChild(label);
  pokemon.abilities.forEach((abilityItem) => {
    const listItem = document.createElement("li");
    listItem.textContent = abilityItem.ability.name;
    abilityList.appendChild(listItem);
  });
  pokeBack.appendChild(backname)
  backname.appendChild(pokeCaption)
  dexsection1.appendChild(abilityList);
  pokeBack.appendChild(dexsection1)
  dexsection2.appendChild(weightlist)
  pokeBack.appendChild(dexsection2)
  dexsection3.appendChild(heightlist)
  pokeBack.appendChild(dexsection3)
  dexsection4.appendChild(typelist)
  pokeBack.appendChild(dexsection4)

  //add held items to pokedex with pokemon.held_items.slice(0, 2) 
  

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
      color = "#a1871f";
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

function getPokeIconType(pokeType) {
  let icon;
  switch (pokeType) {
    case "grass":
      icon = "../images/grass-icon.png";
      break;
    case "bug":
      icon = "../images/bug-icon.webp";
      break;
    case "dark":
      icon = "../images/dark-icon.png";
      break;
    case "dragon":
      icon = "../images/dragon-icon.webp";
      break;
    case "electric":
      icon = "../images/electric-icon.webp";
      break;
    case "fairy":
      icon = "../images/fairy-icon.png";
      break;
    case "fighting":
      icon = "../images/fighting-icon.png";
      break;
    case "fire":
      icon = "../images/fire-icon.webp";
      break;
    case "flying":
      icon = "../images/flying-icon.png";
      break;
    case "ghost":
      icon = "../images/ghost-icon.webp";
      break;
    case "ground":
      icon = "../images/ground-icon.png";
      break;
    case "ice":
      icon = "../images/ice-icon.webp";
      break;
    case "normal":
      icon = "../images/normal-icon.webp";
      break;
    case "poison":
      icon = "../images/poison-icon.webp";
      break;
      case "psychic":
      icon = "../images/psychic-icon.webp";
      break;
      case "rock":
      icon = "../images/rock-icon.png";
      break;
      case "steel":
      icon = "../images/steel-icon.webp";
      break;
      case "water":
      icon = "../images/water-icon.webp";
      break;
  }
return icon 
}



await loadPokemon(0, 1000);

function getPokemonByType(type1) {
  return loadedPokemon.filter((pokemon) => pokemon.types[0].type.name === type1)};
