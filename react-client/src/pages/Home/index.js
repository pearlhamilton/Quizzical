import React from "react";

import { Link } from "react-router-dom";
import Quiz from "../Quiz";

function HomePage() {
  
  // const handleClick = () => {
  //   // dispatch(fetchQuiz());
  //   <Link to="/quiz"></Link>;
  // };

  return (
    <div>
      <h1>Let's Get Quizzical</h1>
      <form>
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
          <select>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </label>
        <br />
      </form>
      
      <button type="submit" value="Play">
        <Link to="/quiz" > Play </Link>
      </button>

    </div>
  );
}

export default HomePage;
