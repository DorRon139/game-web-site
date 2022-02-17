import React, { useState } from "react";
import "./navbar.css";
import { Button } from "@mui/material";

const Navbar = (props) => {
  const gameType = {
    ticTacToe: 1,
    blackjack: 2,
  };

  return (
    <nav>
      <img src={"/images/logo.png"} />
      <h3>ReactGames</h3>
      <ul>
        <li>
          <Button
            onClick={() => {
              props.onSelectGame(gameType.ticTacToe);
            }}
          >
            TicTacToe
          </Button>
        </li>
        <li>
          <Button
            onClick={() => {
              props.onSelectGame(gameType.blackjack);
            }}
          >
            BlackJack
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
