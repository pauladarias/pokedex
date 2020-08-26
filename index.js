/*
    Pokedex
    
    Write an async function 
        that uses fetch() to fetch all 
        Pokemon from pokemon.json
    
    Display all the Pokemon
        ID, English Name, 
        Type(s), 
        Stats: HP/Attack/Defense/Speed
*/

async function getAllPokemon() {
  let response = await fetch("pokemon.json");
  let data = await response.json();
  console.log(data[0]);
  return data;
}

function getAllPokemonHtml(pokemon) {
  return `
  <div class="pokemon-id">${pokemon.id}</div>
  <div class="pokemon-name">${pokemon.name.english}</div>
  <div class="pokemon-type">${pokemon.type[0]}</div>
  <div class="pokemon-hp">${pokemon.base.HP}</div>
  <div class="pokemon-attack">${pokemon.base.Attack}</div>
  <div class="pokemon-defense">${pokemon.base.Defense}</div>
  <div class="pokemon-speed">${pokemon.base.Speed}</div>

  
  `;
}

getAllPokemon().then((pokemon) => {
  document.body.innerHTML = `
    <div class="board">
     ${pokemon.map(getAllPokemonHtml).join("")}

    </div>
  `;
});
