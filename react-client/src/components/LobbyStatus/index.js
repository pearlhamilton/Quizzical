import React from 'react';
import {useSelector} from "react-redux"


const LobbyStatus = () => {


    const subject = useSelector((state) => state.config.config.subject) //need to change this back into words
    const difficulty = useSelector((state) => state.config.config.difficulty)
    const numberOfQs = useSelector((state) => state.config.config.numberOfQs ) 

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
            <>
        <p>Waiting for host to start the game</p>
        
        <p>You will be answering {numberOfQs} questions about {subject} at difficulty level{difficulty}</p>
        </>
        )
    }





}

export default LobbyStatus