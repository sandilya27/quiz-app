import { useState } from "react";
import { questions } from "../utils/questionBank";
import { useDispatch } from "react-redux";
import { increaseScore } from "../utils/scoreSlice";
import { changeGameState } from "../utils/gameStateSlice";
import Card from "./Card";

const Quiz = () => {
  const [quesNo, setQuesNO] = useState(0);
  const [option, setOption] = useState(null);
  const dispatch = useDispatch();

  const next = () => {
    if(option){
      if (option === questions[quesNo].correct) {
        dispatch(increaseScore());
      }
      setOption(null);
      quesNo === questions.length - 1
        ? dispatch(changeGameState("score"))
        : setQuesNO(quesNo + 1);
    }
    
  };

  return (
    <Card>
      <div>
        <h3 className="question">{questions[quesNo].question}</h3>
        <div className="options">
          <button
            className={
              option === "A" ? "option selected" : "option notSelected"
            }
            onClick={() => setOption("A")}
          >
            {questions[quesNo].optionA}
          </button>
          <button
            className={
              option === "B" ? "option selected" : "option notSelected"
            }
            onClick={() => setOption("B")}
          >
            {questions[quesNo].optionB}
          </button>
          <button
            className={
              option === "C" ? "option selected" : "option notSelected"
            }
            onClick={() => setOption("C")}
          >
            {questions[quesNo].optionC}
          </button>
          <button
            className={
              option === "D" ? "option selected" : "option notSelected"
            }
            onClick={() => setOption("D")}
          >
            {questions[quesNo].optionD}
          </button>
        </div>
        <div className="funcBtn">
          <button className="btn" onClick={() => setOption(null)}>Clear Selection</button>
          <button className={option!==null ? "btn enabled":"btn disabled"} onClick={next}>
            {quesNo === questions.length - 1 ? "Submit" : "Next Question"}
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Quiz;
