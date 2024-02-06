import { useState } from "react";
function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  
  return (
    <>
      <div className="board-row">
        <Square onClick={() => handleClick(0)} value={squares[0]} />
        <Square onClick={() => handleClick(1)} value={squares[1]} />
        <Square onClick={() => handleClick(2)} value={squares[2]} />
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(3)} value={squares[3]} />
        <Square onClick={() => handleClick(4)} value={squares[4]} />
        <Square onClick={() => handleClick(5)} value={squares[5]} />
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(6)} value={squares[6]} />
        <Square onClick={() => handleClick(7)} value={squares[7]} />
        <Square onClick={() => handleClick(8)} value={squares[8]} />
      </div>
    </>
  );
}
