export default function TicTacToe() {
  function Square({ value }) {
    return <button>{value}</button>;
  }

  return (
    <div className="tictactoeContainer">
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
