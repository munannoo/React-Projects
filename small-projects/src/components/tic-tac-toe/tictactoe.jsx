import { useEffect, useState } from "react";
import "../styles.css";

export default function TicTacToe() {
  const [isOtrun, setisOtrun] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [status, setStatus] = useState("");

  function Squares({ value, onclick }) {
    return (
      <button onClick={onclick} className="column ttt-button">
        {value}
      </button>
    );
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("This is a draw. Restart to play again");
    } else if (getWinner(squares)) {
      setStatus(`The winner is ${getWinner(squares)}. Restart to play again`);
    } else {
      setStatus(`Its ${isOtrun ? "O" : "X"}'s turn`);
    }
  }, [squares, isOtrun]);

  function getWinner(square) {
    let winPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winPattern.length; i++) {
      const [x, y, z] = winPattern[i];

      if (square[x] && square[x] === square[y] && square[x] === square[z]) {
        return square[x];
      }
    }
    return null;
  }

  function handleOnClick(getSqaure) {
    let cpySquare = [...squares];
    if (getWinner(cpySquare) || cpySquare[getSqaure]) return;
    cpySquare[getSqaure] = isOtrun ? "O" : "X";
    setisOtrun(!isOtrun);
    console.log(isOtrun);
    setSquares(cpySquare);
  }

  function handleOnRestart() {
    setisOtrun(true);
    setSquares(Array(9).fill(""));
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

      <h1>{status}</h1>
      <button onClick={handleOnRestart}>Restart</button>
    </div>
  );
}
