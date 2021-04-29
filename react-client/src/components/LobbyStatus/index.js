import React from 'react';
import {useSelector} from "react-redux"


const LobbyStatus = () => {

    // const usertype = useSelector((state) => state.user.user.type)
    const usertype = "PLAYER"


    if (usertype === "HOST"){
        return (
            <button>Start Game</button> 
            // onclick fetch questions and go to quiz page
        )

    }
    else{
        return(
        <p>Waiting for host to start the game</p>
        
        )
    }





}

export default LobbyStatus