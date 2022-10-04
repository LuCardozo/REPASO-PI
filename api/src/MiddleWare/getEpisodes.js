const axios = require("axios");
const {Episode} = require("../db");

// hacemos el llamado a la api
const getEpisodes = async () =>{
    let episodes = await axios.get("https://rickandmortyapi.com/api/episode")
    episodes = episodes.data.results

    episodes = episodes.map(e =>{
        return {
            name: e.name,
            id: e.id,
            air_date : e.air_date
        }
    })

    episodes.map( async e =>{
        await Episode.findOrCreate({
            where: {
                name: e.name,
                id: e.id,
                air_date: e.air_date
            }
        })
    })

    let episodeInDB = await Episode.findAll()

    // console.log(episodeInDB)
    return episodeInDB;
}






module.exports = {getEpisodes}