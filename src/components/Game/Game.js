import React from "react";
import "./game.css";
import TicTacToe from "../TicTacToe/TicTacToe.js";
import gameType from "../../App.js";
import Blackjack from "../Blackjack/Blackjack";

const Game = ({ game }) => {
  return (
    <div className="game">
      {game == 0 && <h1>Home</h1>}
      {game == 1 && <TicTacToe />}
      {game == 2 && <Blackjack />}
    </div>
  );
};

export default Game;
