import "./App.css";
import InputForm from "./components/InputForm";
import { useState } from "react";
import Platform from "./components/Platform";
import Buttons from "./components/Buttons";

function App() {
  const [firstPlayerName, setFirstPlayerName] = useState("");
  const [secondPlayerName, setSecondPlayerName] = useState("");

  const [isFormVisible, setIsFormVisible] = useState(true);

  const [activePlayer, setActivePlayer] = useState(1);

  const [firstPlayerScore, setFirstPlayerScore] = useState(0);
  const [secondPlayerScore, setSecondPlayerScore] = useState(0);

  const [firstPlayerCurrentScore, setFirstPlayerCurrentScore] = useState(0);
  const [secondPlayerCurrentScore, setSecondPlayerCurrentScore] = useState(0);

  let isFWinner = false;
  let isSWinner = false;

  if (firstPlayerScore >= 20) {
    isFWinner = true;
  }

  if (secondPlayerScore >= 20) {
    isSWinner = true;
  }

  function formSubmitHandler(data) {
    setFirstPlayerName(data.firstPlayer);
    setSecondPlayerName(data.secondPlayer);
    setIsFormVisible(false);
  }

  function currentScoreHandler(data) {
    if (activePlayer === 1) {
      setFirstPlayerCurrentScore((prev) => prev + data);
    }
    if (activePlayer === 2) {
      setSecondPlayerCurrentScore((prev) => prev + data);
    }
  }

  function mainScoreHandler() {
    if (activePlayer === 1) {
      setFirstPlayerScore((prev) => prev + firstPlayerCurrentScore);
    }
    if (activePlayer === 2) {
      setSecondPlayerScore((prev) => prev + secondPlayerCurrentScore);
    }
  }

  function changeCurrentPlayer() {
    setActivePlayer((prev) => (prev === 1 ? 2 : 1));

    setFirstPlayerCurrentScore(0);
    setSecondPlayerCurrentScore(0);
  }

  function resetHandler() {
    setActivePlayer(1);

    setFirstPlayerScore(0);
    setSecondPlayerScore(0);

    setFirstPlayerCurrentScore(0);
    setSecondPlayerCurrentScore(0);

    isFWinner = false;
    isSWinner = false;
  }

  return (
    <>
      {isFormVisible && <InputForm onSubmit={formSubmitHandler} />}

      {!isFormVisible && (
        <div className="platform-container">
          <main>
            <Platform
              tagContent={
                isFWinner ? `${firstPlayerName} WON` : "Current Player"
              }
              isWinner={isFWinner}
              playerName={firstPlayerName}
              isActive={activePlayer === 1}
              score={firstPlayerScore}
              currentScore={firstPlayerCurrentScore}
              tagLabel="tag-current0"
            />

            <Platform
              tagContent={
                isSWinner ? `${secondPlayerName} WON` : "Current Player"
              }
              isWinner={isSWinner}
              playerName={secondPlayerName}
              isActive={activePlayer === 2}
              score={secondPlayerScore}
              currentScore={secondPlayerCurrentScore}
              tagLabel="tag-current1"
            />

            <Buttons
              isWinner={isSWinner || isFWinner}
              onCurrentScoreChange={currentScoreHandler}
              onScoreChange={mainScoreHandler}
              onChangePlayer={changeCurrentPlayer}
              onReset={resetHandler}
              mainScore={
                activePlayer === 1 ? firstPlayerScore : secondPlayerScore
              }
              currentScore={
                activePlayer === 1
                  ? firstPlayerCurrentScore
                  : secondPlayerCurrentScore
              }
            />
          </main>
        </div>
      )}
    </>
  );
}

export default App;

// import "./App.css";
// import InputForm from "./components/InputForm";
// import { useState } from "react";
// import Header from "./components/Header";
// import Platform from "./components/Platform";
// import Buttons from "./components/Buttons";

// function App() {
//   const [firstPlayerName, setFirstPlayerName] = useState("");
//   const [secondPlayerName, setSecondPlayerName] = useState("");
//   const [isFormVisible, setIsFormVisible] = useState(true);
//   const [firstPlayerActive, setFirstPlayerActive] = useState(true);
//   const [secondPlayerActive, setSecondPlayerActive] = useState(false);
//   const [firstPlayerScore, setFirstPlayerScore] = useState(0);
//   const [secondPlayerScore, setSecondPlayerScore] = useState(0);

//   const [firstPlayerCurrentScore, setFirstPlayerCurrentScore] = useState(0);
//   const [secondPlayerCurrentScore, setSecondPlayerCurrentScore] = useState(0);

//   let isFWinner = false;
//   let isSWinner = false;

//   if (firstPlayerScore >= 10) {
//     isFWinner = true;
//   }

//   if (secondPlayerScore >= 10) {
//     isSWinner = true;
//   }

//   function formSubmitHandler(data) {
//     setFirstPlayerName(data.firstPlayer);
//     setSecondPlayerName(data.secondPlayer);
//     setIsFormVisible(false);
//   }

//   function currentScoreHandler(data) {
//     if (firstPlayerActive) {
//       if (firstPlayerCurrentScore + firstPlayerScore >= 10) {
//         isFWinner = true;
//         return;
//       }
//       setFirstPlayerCurrentScore((prev) => prev + data);
//     }
//     if (secondPlayerActive) {
//       setSecondPlayerCurrentScore((prev) => prev + data);
//     }
//   }

//   function mainScoreHandler() {
//     if (firstPlayerActive) {
//       setFirstPlayerScore((prev) => prev + firstPlayerCurrentScore);
//     }
//     if (secondPlayerActive) {
//       setSecondPlayerScore((prev) => prev + secondPlayerCurrentScore);
//     }
//   }

//   function changeCurrentPlayer() {
//     setFirstPlayerActive((prev) => !prev);
//     setSecondPlayerActive((prev) => !prev);

//     setFirstPlayerCurrentScore(0);
//     setSecondPlayerCurrentScore(0);
//   }

//   function resetHandler() {
//     setFirstPlayerActive(true);
//     setSecondPlayerActive(false);
//     setFirstPlayerScore(0);
//     setSecondPlayerScore(0);
//     setFirstPlayerCurrentScore(0);
//     setSecondPlayerCurrentScore(0);
//     isFWinner = false;
//     isSWinner = false;
//   }

//   return (
//     <>
//       <Header />
//       {isFormVisible && <InputForm onSubmit={formSubmitHandler} />}

//       {!isFormVisible && (
//         <div className="platform-container">
//           <main>
//             <Platform
//               isWinner={isFWinner}
//               playerName={firstPlayerName}
//               isActive={firstPlayerActive}
//               score={firstPlayerScore}
//               currentScore={firstPlayerCurrentScore}
//               tagLabel="tag-current0"
//             />
//             <Platform
//               isWinner={isSWinner}
//               playerName={secondPlayerName}
//               isActive={secondPlayerActive}
//               score={secondPlayerScore}
//               currentScore={secondPlayerCurrentScore}
//               tagLabel="tag-current1"
//             />
//             <Buttons
//               onCurrentScoreChange={currentScoreHandler}
//               onScoreChange={mainScoreHandler}
//               onChangePlayer={changeCurrentPlayer}
//               onReset={resetHandler}
//             />
//           </main>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;
