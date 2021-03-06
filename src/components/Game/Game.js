import React from "react";
import "./game.css";
import TicTacToe from "../TicTacToe/TicTacToe.js";
import Blackjack from "../Blackjack/Blackjack";
import NotExistPage from "./NotExistPage.js";
import Home from "../Home/Home";

const Game = ({ game, setGame }) => {
  return (
    <div className="game">
      {!game && <Home setGame={setGame} />}
      {game == 1 && <TicTacToe />}
      {game == 2 && <Blackjack />}
      {game > 2 && <NotExistPage />}
    </div>
  );
};

export default Game;
