import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import Quiz from "../Quiz";
import {fetchQuiz} from '../../actions'
import { useSelector, useDispatch } from 'react-redux';


function HomePage() {

  const [ difficulty, setDifficulty] = useState("easy"); 

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchQuiz(difficulty))
    
    history.push('/quiz')
  }

  const handleChange = e => {
    setDifficulty(e.target.value)
  }

  return (
    <div>
      <h1>Let's Get Quizzical</h1>
      <form onSubmit={handleSubmit}>
        <label for="number of players">
          Number of players
          <input type="radio" id="1-player" name="players" value="1 player" />
          <label for="1 player">1 player</label>
          <input type="radio" id="2-players" name="players" value="2 players" />
          <label for="2 players">2 players</label>
          <input type="radio" id="3-players" name="players" value="3 players" />
          <label for="3 players">3 players</label>
        </label>
        <br />
        <label for="pick a category">
          Pick a category    
          <select>
            <option value="General Knowledge">General Knowledge</option>
            <option value="Music">Music</option>
            <option value="Sport">Sport</option>
          </select>
        </label>
        <br />
        <label for="number of questions">
          Number of questions (min:5 max:20)
          <input type="number" name="number of questions" min="5" max="20" />
        </label>
        <br />
        <label for="difficulty">
          Difficulty
          <select name="difficulty-level" onChange={handleChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <br />
        <input type="submit"  value="Play"/>
      </form>
    </div>
  );
}

export default HomePage;
