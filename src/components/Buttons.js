import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import dice1 from "../assets/dice-1.png";
import dice2 from "../assets/dice-2.png";
import dice3 from "../assets/dice-3.png";
import dice4 from "../assets/dice-4.png";
import dice5 from "../assets/dice-5.png";
import dice6 from "../assets/dice-6.png";

export default function Buttons(props) {
  // onScoreChange() onCurrentScoreChange() onChangePlayer() currentScore, mainScore, isWinner
  const [diceNumber, setDiceNumber] = useState(1);

  function holdHandler() {
    if (props.isWinner) {
      return;
    }
    props.onScoreChange();

    if (!(props.currentScore + props.mainScore >= 20)) {
      props.onChangePlayer();
    }
  }

  function rollDiceHandler() {
    if (props.isWinner) {
      return;
    }
    const diceNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    setDiceNumber(diceNumber);
    console.log(diceNumber);

    if (diceNumber !== 1) {
      props.onCurrentScoreChange(diceNumber);
    } else {
      props.onChangePlayer();
    }
  }

  let image = dice1;
  switch (diceNumber) {
    case 2:
      image = dice2;
      break;
    case 3:
      image = dice3;
      break;
    case 4:
      image = dice4;
      break;
    case 5:
      image = dice5;
      break;
    case 6:
      image = dice6;
      break;
  }

  return (
    <div>
      <img src={image} alt="Playing dice" className="dice" />
      <button onClick={() => props.onReset()} className="btn btn--new">
        🔄 New game
      </button>
      <button onClick={rollDiceHandler} className="btn btn--roll">
        🎲 Roll dice
      </button>
      <button onClick={holdHandler} className="btn btn--hold">
        📥 Hold
      </button>
    </div>
  );
}
