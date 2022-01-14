let fs = require("fs")

const readPokedex = () => 
{
    let listPokedex =fs.readFileSync("./pokedex.json", "utf-8");
    return JSON.parse(listPokedex);
}


const writeJSON = (arrayPokemons) =>
{
    let writeCurrentJSON = JSON.stringify(arrayPokemons)
    fs.writeFileSync("./pokedex.json", writeCurrentJSON, "utf-8")
    return 
}

const saveNewPokemon = (pokemon) =>
{
    let currentPokemons = readPokedex()
    currentPokemons.push(pokemon)
    writeJSON(currentPokemons)
    return
}


module.exports= {readPokedex, saveNewPokemon,writeJSON};

