import "../styles.css";
export default function TicTacToe() {
  function Squares({ value }) {
    return <button className="column ttt-button">{value}</button>;
  }

  return (
    <div className="tictactoeContainer">
      <div className="row">
        <Squares />
        <Squares />
        <Squares />
      </div>
      <div className="row">
        <Squares />
        <Squares />
        <Squares />
      </div>
      <div className="row">
        <Squares />
        <Squares />
        <Squares />
      </div>
    </div>
  );
}
