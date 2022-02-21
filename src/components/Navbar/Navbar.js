import React, { useState } from "react";
import "./navbar.css";
import { Button } from "@mui/material";

const Navbar = (props) => {
  const gameType = {
    home: 0,
    ticTacToe: 1,
    blackjack: 2,
  };

  return (
    <nav>
      <a
        onClick={() => {
          props.onSelectGame(gameType.home);
        }}
      >
        <img src={"/images/logo.png"} />
        <h3>ReactGames</h3>
      </a>
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
