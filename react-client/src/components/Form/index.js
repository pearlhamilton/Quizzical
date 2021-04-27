import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchQuiz } from "../../actions";
import { Quiz } from "../../pages";


function Form() {
  const [difficultyInput, setDifficultyInput] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  function handleForm(e) {
    e.preventDefault();
    let difficulty = e.target.difficulty.value;
    console.log(difficulty);
    setDifficultyInput(difficulty);
  }

  const handleSubmit = () => {
    dispatch(fetchQuiz(setDifficultyInput));
    history.push("/quiz");
    //<Quiz difficulty={difficultyInput} />;
  };

  return (
    <div>
      <form onSubmit={handleForm}>
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
          <select>
            <option value="General Knowledge">General Knowledge</option>
            <option value="Music">Music</option>
            <option value="Sport">Sport</option>
          </select>
        </label>
        <br />
        <label for="number of questions">
          Number of questions (min:5 max:20)
          <input type="number" name="numberOfQuestions" min="5" max="20" />
        </label>
        <br />
        <label for="difficulty">
          Difficulty
          <select name="difficulty">
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Play" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default Form;
