import React, { useState } from "react";

export default function Platform(props) {
  let classNameSection = props.isActive ? `player--active` : " ";
  let winnerClass = props.isWinner ? "player--winner" : "";
  // const [winner, setWinner] = useState(false);

  // if (props.isWinner === true && winner !== true) {
  //   console.log("yes");
  //   setWinner(true);
  // }

  return (
    <section className={`player ${classNameSection} ${winnerClass}`}>
      {props.isActive && (
        <div className={props.tagLabel}>{props.tagContent}</div>
      )}
      <h2 className="name" id="name--0">
        {props.playerName}
      </h2>
      <p className="score" id="score--0">
        {props.score}
      </p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score" id="current--0">
          {props.currentScore}
        </p>
      </div>
    </section>
  );
}
