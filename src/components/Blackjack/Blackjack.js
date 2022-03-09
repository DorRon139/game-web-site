import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./blackjack.css";
import Player from "./player";
import Dealler from "./dealler";
import CardObject from "./cardClass";
import TextField from "@mui/material/TextField";
import user from "../../user/userObj";

let player = new Player(user.name, user.points);
let dealler = new Dealler();

const Blackjack = () => {
  let playerFullName = player.name + ": $" + player.chips;
  let [hasBlackJack, setHasBlackjack] = useState(false);
  let [message, setMessage] = useState("Welcome To The Tabale");
  let [playersumMessage, setPlayerSumMessage] = useState("Sum: 0");
  let [deallerSumMessage, setDeallerSumMessage] = useState("");
  let [playerHandToRender, setPlayerHandToRender] = useState([]);
  let [dillerHandToRender, setDillerHandToRender] = useState([]);

  const startGame = () => {
    dealler.isDeallerTurn = false;
    player.inGame = true;
    player.bet = parseInt(document.getElementById("outlined-required").value);
    if (betValidation(player.chips, player.bet)) {
      player.chips -= player.bet;
      player.setNewHand();
      dealler.setNewHand();
      setHasBlackjack(false);
      dealler.handCard(player);
      dealler.handCard(player);
      dealler.handCard(dealler);
      dealler.handCard(dealler);
      renderGame();
    }
  };

  const renderGame = () => {
    theRenderedCards();
    setPlayerSumMessage(`Sum: ${player.sum}`);
    setDeallerSumMessage(`Dealler Cards: ${dealler.hand[1].value}`);
    if (player.sum <= 20) {
      setMessage("Do you want to draw a new card?");
    } else if (player.sum === 21) {
      if (player.hand.length === 2) {
        setMessage("You've got Blackjack!");
        player.chips += player.bet * 2.5;
      }
      player.inGame = false;
      deallerTurn();
    } else {
      player.inGame = false;
      deallerTurn();
    }
  };
  const doubleClick = () => {
    if (player.inGame) {
      if (betValidation(player.chips, player.bet)) {
        player.chips -= player.bet;
        player.bet += player.bet;
        newCard();
        deallerTurn();
      }
    }
  };
  const newCard = () => {
    if (player.inGame && !hasBlackJack) {
      dealler.handCard(player);
      renderGame();
    } else {
      setMessage("Start a New Game");
    }
  };

  const deallerTurn = () => {
    dealler.isDeallerTurn = true;
    theRenderedCards();
    while (dealler.sum <= 16) {
      dealler.handCard(dealler);
      theRenderedCards();
    }
    setDeallerSumMessage(`Dealler Cards: ${dealler.sum}`);
    checkForWinner();
  };

  const checkForWinner = () => {
    if (player.sum <= 21 && player.sum > dealler.sum) {
      setMessage("You Won, Take Your Bet");
      player.chips += 2 * player.bet;
    } else if (player.sum <= 21 && dealler.sum > 21) {
      setMessage("The Diller is out, Take Your Bet");
      player.chips += 2 * player.bet;
    } else if (player.sum > 21 || player.sum <= dealler.sum) {
      setMessage("You Lose, Maybe next Time");
    } else if (player.sum == dealler.sum) {
      player.chips += player.bet;
      setMessage("Draw");
    }
    player.inGame = false;
  };

  const betValidation = (chips, bet) => {
    if (bet > chips) {
      alert(`You Dont Have ${bet}$ to Bet`);
      return false;
    }
    if (bet < 0) {
      alert("You Cant set a Negative Value");
      return false;
    }
    return true;
  };

  const theRenderedCards = () => {
    setPlayerHandToRender(
      player.hand.map((card) => {
        return card.toCardComponent();
      })
    );
    setDillerHandToRender(
      dealler.hand.map((card, index) => {
        if (index === 0 && dealler.isDeallerTurn === false) {
          return new CardObject(
            "./images/Cards/blue_back.png",
            "",
            ""
          ).toCardComponent();
        } else {
          return card.toCardComponent();
        }
      })
    );
  };

  return (
    <div className="blackjack--father">
      <div className="blackjack-game">
        <h1 id="black-title">Blackjack</h1>
        <p id="message-par">{message}</p>
        <p>{deallerSumMessage}</p>
        <div className="blackjack--dillerHandToRender">
          {dillerHandToRender}
        </div>
        <p id="cards-par">Cards: </p>
        <div className="blackjack--playerHandToRender">
          {playerHandToRender}
        </div>
        <p id="sum-par">{playersumMessage}</p>
        <section className="blackjack--btn--section">
          <Button
            variant="contained"
            style={{ marginRight: "6px", width: "17%" }}
            onClick={() => newCard()}
            id="start-btn"
          >
            HIT
          </Button>
          <Button
            variant="contained"
            onClick={() => doubleClick()}
            style={{ marginRight: "6px", width: "17%" }}
          >
            DOUBLE
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              if (player.inGame) {
                deallerTurn();
              }
            }}
            style={{ width: "17%" }}
          >
            STAND
          </Button>{" "}
        </section>
        <section className="blackjack--start-btn">
          <Button
            variant="contained"
            style={{
              margin: "5px 6px 0px 0px",
              height: "55px",
              width: "17%",
            }}
            onClick={() => startGame()}
            id="start-btn"
          >
            START GAME
          </Button>

          <TextField
            id="outlined-required"
            label="Place Your Bet"
            type="number"
            defaultValue="5"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            style={{ width: "17%", marginTop: "5px" }}
          />
        </section>
        <p id="player-par">{playerFullName}</p>
      </div>
    </div>
  );
};

export default Blackjack;
