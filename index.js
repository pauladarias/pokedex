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

function getAllPokemonHtml(aPokemon) {
  return `<div class="a-pokemon">
  <div class="a-pokemon-id">${aPokemon.id}</div>
  
  <div class="a-pokemon-name">${aPokemon.name.english}</div>
  <div class="a-pokemon-type">${aPokemon.type.join(" / ")}</div>
  
  <div class="a-pokemon-stat">HP: ${aPokemon.base.HP}</div>
  <div class="a-pokemon-stat">Attack: ${aPokemon.base.Attack}</div>
  <div class="a-pokemon-stat">Defense: ${aPokemon.base.Defense}</div>
  <div class="a-pokemon-stat">Speed: ${aPokemon.base.Speed}</div>
</div>`;
}

getAllPokemon().then((allPokemon) => {
  let samplePokemon = allPokemon[0];
  console.log(samplePokemon);
  document.body.innerHTML = `<div class="my-pokedex">${allPokemon
    .map(getAllPokemonHtml)
    .join("")}
  </div>`;
});
