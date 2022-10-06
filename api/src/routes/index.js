const { Router } = require("express");

const router = Router();

//importo las funciones**********
const {allCharacters} = require("../MiddleWare/GetCharacters")
const {getEpisodes} = require("../MiddleWare/getEpisodes")
const {postCharacter} = require("../MiddleWare/PostCharacter")
// Configurar los routers
router.get("/characters", async (req, res) =>{
    try {
        let characters = await allCharacters();
        res.send(characters)
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: "No se pudo traer a los personajes"})
    }

})
router.get("/episodes", async (req,res) =>{
    try {
        let episodes = await getEpisodes()
        res.send(episodes)
    } catch (error) {
        res.status(400).json({msg: "No se logro cargar los episodios"})
    }
})

router.post("/character", async (req, res) =>{
    let {name, origin, species, image, episodes} = req.body;
    try {
        let chara = await postCharacter(name, origin, species, image, episodes)
        res.send(chara)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
})




module.exports = router;
