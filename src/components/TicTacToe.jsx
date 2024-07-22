import React, { useState } from "react";
import Board from "./Board";
import { initialState, checkWinner } from "../utils/ticTacToeUtils";

const TicTacToe = ({ size = 3 }) => {
  const [board, setBoard] = useState(initialState(size));

  const [turnX, setTurnX] = useState(true);
  
  let winner = checkWinner(board, size);

  let status = winner ? `Winner is ${winner}` : turnX ? "Player X turn" : "Player Y turn";

  const handleClick = (rowIdx, colIdx) => {
    if (board[rowIdx][colIdx] || winner) {
      return;
    }
    const deepCopyOfBoard = JSON.parse(JSON.stringify(board));
    deepCopyOfBoard[rowIdx][colIdx] = turnX ? "X" : "O";
    setBoard(deepCopyOfBoard);
    setTurnX(!turnX);
  };

  const handleReset = () => {
    setBoard(initialState(size));
  };

  return (
    <div className="container">
      <Board size={size} board={board} handleClick={handleClick} />
      <div className="status">{status}</div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TicTacToe;
