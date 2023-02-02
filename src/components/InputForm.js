import React, { useRef } from "react";
import Header from "./Header";

export default function InputForm(props) {
  const firstPlayerRef = useRef();
  const secondPlayerRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    props.onSubmit({
      firstPlayer: firstPlayerRef.current.value,
      secondPlayer: secondPlayerRef.current.value,
    });

    firstPlayerRef.current.value = "";
    secondPlayerRef.current.value = "";
  }

  return (
    <>
      <Header />

      <div className="container">
        <form className="form-container" onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="player1">First Player Name</label>
            <input type="text" id="player1" ref={firstPlayerRef} required />
          </div>

          <div className="form-control">
            <label htmlFor="player2">Second Player Name</label>
            <input type="text" id="player2" ref={secondPlayerRef} required />
          </div>

          <div className="button-box">
            <button type="submit">Start Game</button>
          </div>
        </form>
      </div>
    </>
  );
}
