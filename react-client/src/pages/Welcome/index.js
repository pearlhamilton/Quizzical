import React, { useEffect, useState } from "react";
import "./style.css";
// import { Socket } from "socket.io-client";
import { useHistory } from "react-router-dom";
import logo from "../../../public/images/quizlogo.png";
import { socket } from '../../socket/index.js';
import * as actions from '../../actions/user';
import { setHost, setPlayer, setID } from '../../actions/userType';
import { useDispatch } from 'react-redux';

// const server = "http://localhost:3000";


const Welcome = () => {
    const dispatch = useDispatch()
    const history = useHistory();

    const [playerCount, setPlayerCount] = useState(0);
    const [usrInput, setUsrInput] = useState(undefined);
    const [room, setRoom] = useState(undefined);
    const [error, setError] = useState("");
    const [id, setLocalId] = useState("");

    useEffect(() => {
       
        socket.on('assign-id', id => dispatch(setID(id)))
        console.log(id)

        socket.on('users', users => setPlayerCount(users))
    
    }, []);

    const handleData = (users) => {
        setPlayerCount(users);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };

    const handleInput = (e) => {
        setError("")
        setUsrInput(e.target.value);
    };

    const handleRoomInput = (e) => {
        setError("")
        setRoom(e.target.value);
    };

    const handleCreate = (e) => {
        e.preventDefault();
        const player = usrInput;

        if (player === undefined) {
            setError("Don't be rude, introduce yourself!")
        } else if (room === undefined) {
            setError("You need to create room or give an existing name");
        } else {
       
            socket.emit("check-room", room, (res) => {

                console.log("socket response", res);

                if (res.code === "success") {
                    setRoom(room);
                    dispatch(setHost(player, room));
                    history.push("/home");
                } else {
                    setRoom(undefined);
                    console.warn(error);
                    setError(res.message);
                }
            });
        }
    };

    const handleJoin = (e) => {
        e.preventDefault();
        
        const player = usrInput;
        if (player === undefined) {
            setError("Don't be rude, introduce yourself!");
        } else if (room === undefined) {
            setError("You need to create room or give an existing name");

        } else {

            const config = {
                room: room,
                username: player
            }
            socket.emit("join-room", config, (res) => {

                console.log("socket response", res);

                if (res.code === "success") {
                    setRoom(room);


                    dispatch(setPlayer(player, room));
                    history.push("/lobby");
                } else {
                    setRoom(undefined);
                    setError(res.message);
                }
            });
        }

    };

    const renderJoin = () => {
        let tags = null;

        if (playerCount < 2) {
            tags = "disabled";
        }

        return (
            <>
                <input type="submit" className={tags} name="joinQuiz" value="Join" onClick={handleJoin} />
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

            <label htmlFor="roomName">Room Name</label>
            <input
                type="text"
                id="roomName"
                name="roomName"
                placeholder="Pick a room name (max 4 players)"
                value={room}
                onChange={handleRoomInput}
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
            {playerCount <= 1
                ? "No Players Online"
                : `Total players online: ${playerCount - 1}`}
                 {error &&  <div className="error">{error}</div>}
        </p>
      
        </div>
    );
};

export default Welcome;