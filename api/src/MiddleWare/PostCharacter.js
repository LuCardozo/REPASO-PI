
const { DATEONLY } = require("sequelize");
const {Character, Episode} = require("../db")

const postCharacter = async (name, origin, species, image, episodes) =>{
    if(!name) throw Error("Tu personaje necesita un nombre");
    if(!origin) throw Error("Tu personaje debe tener un origen");
    if(!species) throw Error("Tu personaje debe ser de alguna especie");
    if(!episodes) throw Error("Tu personaje debe salir en algun episodio");

    let episodeDB = await Episode.findAll()
    let band = 0;
    for(let i = 0; i < episodeDB.length; i++){
        for(let j = 0; j < episodes.length; j++){
            if(episodeDB[i].name === episodes[j]){
                band++;
            }
        }
    }
    let date = new Date()
    console.log(date.toString())
    if(band === episodes.length){
        await Character.create({
            name: name,
            origin: origin,
            species: species,
            image: image,
            episode: episodes,
            
        })
        return ("Personaje Creado");
    }
    else{ throw Error("Verifica bien los capitulos")}


    

}


module.exports = {postCharacter}