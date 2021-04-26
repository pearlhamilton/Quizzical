import React, { useState } from 'react';
import './style.css'


const Welcome = () => {
    const [ username, setUsername ] = useState("");
    //get the existing usrnames???? 
    const [ usrInput, setUsrInput ] = useState("");

    const handleInput = e => setUsrInput(e.target.value);


    const handleSubmit = e => {
        e.preventDefault();
        setUsername(usrInput);
        setNameInput("");
    } 


    return(
        <div id="welcome">
            <img src="../../images/quizlogo.png" alt="logo: Let's Get Quizzical"/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="That's not my name!" value={usrInput} onChange={handleInput}/>
            
                <input type="submit" name="newQuiz" value="Create the Quiz"/>
                <input type="submit" name="joinQuiz" value="Join the Quiz"/>
            </form>
        </div>
    );
};

export default Welcome; 