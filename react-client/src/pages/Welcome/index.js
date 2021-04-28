import React, { useEffect, useState } from "react";
import "./style.css";
// import { Socket } from "socket.io-client";
import { useHistory } from "react-router-dom";
import logo from "../../../public/images/quizlogo.png";
import {socket} from '../../socket/index.js';
import * as actions from '../../actions/user';
import {useDispatch} from 'react-redux';

// const server = "http://localhost:3000";


const Welcome = () => {
    const dispatch = useDispatch()
    const history = useHistory();

    const [playerCount, setPlayerCount] = useState(); 
    const [usrInput, setUsrInput] = useState(undefined);

    // const playerCountFun = () => { socket.on('users', count => setPlayerCount(count.length))}

    useEffect(() => {
        socket.on('users', count => setPlayerCount(count.length))
        

        // setInterval(() => {
        //     playerCountFun
        // }, 1000);
        // const interval = setInterval(() => {
        //     console.log(playerCount)
        //    playerCount
        //   }, 1000);
       
        //   return () => clearInterval(interval)
    }, []);

    console.log(playerCount)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };

    const handleInput = (e) => {
        setUsrInput(e.target.value);
    };


    const handleCreate = (e) => {
        e.preventDefault();
        const player = usrInput;

        if (player === undefined) {
            alert("Don't be rude, introduce yourself!");
        } else {

        //pass back to server
        // axios.post(`${server}/quizzes`, {
        //     player: player
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

        // console.log(socket)
        // useEffect(
        //     socket.emit('add user', player)
        // );

        // setUsrInput("");
            dispatch(actions.addUser(player))
            socket.emit("pass-username", player);
            history.push("/home");
        }
    };

    const renderJoin = () => {
        let tags = null;

        if (playerCount < 2) {
            tags = "disabled";
        }
        
        return (
            <>
                <input type="submit" className={tags} name="joinQuiz" value="Join" />
            </>
        );
    };


    return (
        <div id="welcome">
        <img src={logo} alt="logo: Let's Get Quizzical" />
        <form autoComplete="off">
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Choose your player name"
                value={usrInput}
                onChange={handleInput}
            />

            <input
                type="submit"
                name="newQuiz"
                value="New Game"
                onClick={handleCreate}
            />
            {renderJoin()}
        </form>
        <p>
            {playerCount - 1 === 0
                ? "No Players Online"
                : `Players online: ${playerCount - 1}`}
        </p>
        </div>
    );
};

export default Welcome;