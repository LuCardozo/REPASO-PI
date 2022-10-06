const axios = require("axios")
const {Character} = require("../db")
//get a la api


const getApi = async () =>{

    //usando axios y async await **********************

    let character = await axios.get("https://rickandmortyapi.com/api/character");
    character = character.data.results;
    character = character.map( c => {
        return {
            image: c.image,
            name: c.name,
            id: c.id,
            origin: c.origin.name,
            species: c.species,
            episodes: c.episode,
            created: c.created
        }
    })
    // console.log(character)
    return character;

    // usando fetch *****************


    // fetch(`https://rickandmortyapi.com/api/character`)
    // .then(response => response.json())
    // .then(data => console.log(data))

}

// get al DB ***********

const getDB = async () =>{
 let character = await Character.findAll()
//  console.log(character)
 return character
}

const allCharacters = async () =>{
    let api = await getApi();
    let db = await getDB();
    let character = await api.concat(db);
    return character;
}


module.exports = {allCharacters}