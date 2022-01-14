const { ENOTEMPTY } = require("constants");
let fs = require("fs");
let {readPokedex,saveNewPokemon} = require("./PokeFunctions.js")


let procesar = process.argv;
let option2 = procesar[2]
let getInfo3 = procesar[3]
//let gerInfo4 = procesar[4]

class Pokemon {
    constructor({
        id,
        pokeName,
        type: [],
        weaknesses:  [],
        evolutions: [], 
    })
    {
        this.id=id;
        this.pokeName= pokeName;
        this.type;
        this.weaknesses;
        this.evolutions;

    }
    setId(id){
        this.id=id;
    }
    setName(name){
        this.pokeName= name;
    }
    setType(type){
        this.type.push(type);
    }

    setWeaknesses(weakness){
        this.weaknesses.push(weakness);
    }
    setEvoutions(evolution){
        this.evolutions.push(evolution);
    }

}

switch (option2)
{
    case 'show': 
    let pokedex = readPokedex();
    pokedex.forEach(element => {
        console.log(element)
    });
    break;
    
    case 'create':
    let newPokemon = new Pokemon ({id: 1,pokeName: "Charizard",});
    newPokemon.setType("fire");
    newPokemon.setType("flying");
    newPokemon.setWeaknesses("water");
    newPokemon.setWeaknesses("electric");
    newPokemon.setWeaknesses("rock");
    newPokemon.setEvoutions("perrito");
    


    console.log(newPokemon);

    saveNewPokemon(newPokemon)
    console.log ('Sucefully added to the Pokedex')
    break;
    
    case undefined: console.log ('Por favor, recuerde usar uno de los siguientes comandos: ' + "\n" + '1) listar' + "\n" + '2) crear' + "\n" + '3) filtrar')
    break;
    

    default: console.log ('No entiendo que necesitas, te recuerdo las opciones: ' + "\n" + '-------------------------' + "\n" + '1) listar: Visualizar todas las tareas actuales' + "\n" + '2) crear: Ingresar un nuevo titulo con estado pendiente' + "\n" + '3) filtrar: Visualizar las tareas actuales segun el estado ingresado')
    break;
}

