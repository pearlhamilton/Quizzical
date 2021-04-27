import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchQuiz } from "../../actions";
import "./style.css";

function Form() {
  const [difficulty, setDifficulty] = useState("easy");
  const [numberOfQs, setNumberOfQs] = useState(5);
  const [subject, setSubject] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchQuiz(numberOfQs, subject, difficulty));
    history.push("/quiz");
  };

  const handleChangeDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const handleChangeNumberQs = (e) => {
    setNumberOfQs(e.target.value);
  };

  const handleChangeSubject = (e) => {
    setSubject(e.target.value);
    subject(setSubject);
  };

  //random category
  let categories = [9, 12, 21, 22, 26, 31]
  const random = Math.floor(Math.random() * categories.length);
  let randomCategory = categories[random];
  console.log(randomCategory)

  return (
    <div>
      {/* <h1 id="lets-get-quizzical">Let's Get Quizzical</h1> */}
      <img src="../../images/quizlogo.png" alt="logo: Let's Get Quizzical" />
      <form onSubmit={handleSubmit}>
        {/* <label for="number of players">
          Number of players
          <input type="radio" id="1-player" name="players" value="1 player" />
          <label for="1 player">1 player</label>
          <input type="radio" id="2-players" name="players" value="2 players" />
          <label for="2 players">2 players</label>
          <input type="radio" id="3-players" name="players" value="3 players" />
          <label for="3 players">3 players</label>
        </label> */}
        <br />
        <label for="pick a category">
          Pick a category
          <select onChange={handleChangeSubject}>
            {/* https://opentdb.com/api_category.php */}
            <option value="9">General Knowledge</option>
            <option value="12">Music</option>
            <option value="21">Sport</option>
            <option value="22">Geography</option>
            <option value="31">Anime and Manga</option>
            <option value="26">Celebrities</option>
            <option value={randomCategory}> Surprise Me</option>
          </select>
        </label>
        <br />
        <label for="number of questions">
          Number of questions (min:5 max:20)
          <input
            value={numberOfQs}
            type="number"
            name="number-of-questions"
            min="5"
            max="20"
            onChange={handleChangeNumberQs}
          />
        </label>
        <br />
        <label for="difficulty">
          Difficulty
          <select name="difficulty-level" onChange={handleChangeDifficulty}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Play" id="play-button" />
      </form>
    </div>
  );
}

export default Form;
