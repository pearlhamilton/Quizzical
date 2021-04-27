import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchQuiz } from "../../actions";
import { Quiz } from "../../pages";


function Form() {
    const [difficulty, setDifficulty] = useState("easy");
    const [numberOfQs, setNumberOfQs] = useState(5);
    // const [subject, setSubject] = useState('')

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(fetchQuiz(difficulty, numberOfQs));

      history.push("/quiz");
    };

    const handleChangeDifficulty = (e) => {
      setDifficulty(e.target.value);
    };

    const handleChangeNumberQs = (e) => {
      setNumberOfQs(e.target.value);
    };

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
          <input type="number" name="number-of-questions" min="5" max="20" onChange={handleChangeNumberQs}/>
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
        <input type="submit" value="Play" />
      </form>
    </div>

  );
}

export default Form;
