import React, { useEffect, useState } from 'react';
import './style.css'


const Welcome = ({playerCount, joinGame}) => {
    const [ username, setUsername ] = useState("");
    //get the existing usrnames???? 
    const [ usrInput, setUsrInput ] = useState("");
     


    const handleInput = e => setUsrInput(e.target.value);

 
    const handleCreate = e => {
        e.preventDefault();
        setUsername(usrInput);
        
        setNameInput("");
    } 

    const renderJoin= () => {
        let tags = null; 

        if(playerCount < 2 ) {
            tags = "disabled";
        }
        console.log

        return(
            <>
            <input type="submit" className={tags} name="joinQuiz" value="Join"/>
            </>
        )

    }


    return(
        <div id="welcome">
            <img src="../../images/quizlogo.png" alt="logo: Let's Get Quizzical"/>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Choose your player name" value={usrInput} onChange={handleInput}/>
            
                <input type="submit" name="newQuiz" value="New Game" onSubmit={handleCreate}/>
                {renderJoin()}
            </form>
            <p>{ (playerCount - 1) ===  0 ? "No Players Online" : `Players online: ${playerCount - 1}`}</p>
        </div>
    );
};

export default Welcome; 