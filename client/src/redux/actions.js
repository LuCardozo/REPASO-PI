import axios from "axios"


export function getCharacter(){
    // con async await

    return async (dispatch)=>{
        let characters = await axios.get("http://localhost:3001/characters");
        return dispatch({
            type: "GET_CHARACTERS",
            payload: characters.data
        })
    }
}

export function getEpisode(){

    return async(dispatch) =>{
        let episodes = await axios.get("http://localhost:3001/episodes");
        return dispatch({
            type: "GET_EPISODES",
            payload: episodes.data
        })
    }
}

export function postCharacter(data){
    return async (dispatch) =>{
        let response = await axios.post("http://localhost:3001/character", data);
        return response;
    }
}