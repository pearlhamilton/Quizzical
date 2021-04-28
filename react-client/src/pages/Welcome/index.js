import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
// import { Socket } from "socket.io-client";
import { useHistory } from "react-router-dom";
import logo from "../../../public/images/quizlogo.png";

const server = "http://localhost:3000";

const Welcome = ({ playerCount, socket }) => {

  const [usrInput, setUsrInput] = useState();
  const history = useHistory();

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
    console.log(player);

    if (player === undefined) {
      alert("Don't be rude, introduce yourself!");
    } else {
      console.log(e.target);
      // setUsername(usrInput);

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