import { useState } from "react";
import "../styles.css";

export default function TicTacToe() {
  const [isOtrun, setisOtrun] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(""));

  function Squares({ value, onclick }) {
    return (
      <button onClick={onclick} className="column ttt-button">
        {value}
      </button>
    );
  }

  function handleOnClick(getSqaure) {
    let cpySquare = [...squares];
    if (cpySquare[getSqaure]) return;
    cpySquare[getSqaure] = isOtrun ? "O" : "X";
    setisOtrun(!isOtrun);
    setSquares(cpySquare);
  }

  return (
    <div className="tictactoeContainer">
      <div className="row">
        <Squares value={squares[0]} onclick={() => handleOnClick(0)} />
        <Squares value={squares[1]} onclick={() => handleOnClick(1)} />
        <Squares value={squares[2]} onclick={() => handleOnClick(2)} />
      </div>
      <div className="row">
        <Squares value={squares[3]} onclick={() => handleOnClick(3)} />
        <Squares value={squares[4]} onclick={() => handleOnClick(4)} />
        <Squares value={squares[5]} onclick={() => handleOnClick(5)} />
      </div>
      <div className="row">
        <Squares value={squares[6]} onclick={() => handleOnClick(6)} />
        <Squares value={squares[7]} onclick={() => handleOnClick(7)} />
        <Squares value={squares[8]} onclick={() => handleOnClick(8)} />
      </div>
    </div>
  );
}
