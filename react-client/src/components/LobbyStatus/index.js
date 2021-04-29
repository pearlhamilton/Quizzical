import React from 'react';
import {useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';


const LobbyStatus = ({host}) => {
    const history = useHistory();

    const subject = useSelector((state) => state.config.config.subject) //need to change this back into words
    const difficulty = useSelector((state) => state.config.config.difficulty)
    const numberOfQs = useSelector((state) => state.config.config.numberOfQs ) 

    const usertype = host//useSelector((state) => state.user.user.type)
    // const usertype = "PLAYER"
console.log(usertype)

    if (usertype === "HOST"){
        return (
            <button onClick={() => history.push('/quiz')}>Start Game</button> 
            // onclick fetch questions and go to quiz page
        )

    }
    else{
        return(
            <>
        <p>Waiting for host to start the game</p>
        
        <p>You will be answering 
            <span style={{ color: "pink" }}> {numberOfQs} </span> 
            questions about 
            <span style={{ color: "pink" }}> {subject} </span> 
            at difficulty level
            <span style={{ color: "pink" }}> {difficulty} </span> 
        </p>
        </>
        )
    }





}

export default LobbyStatus