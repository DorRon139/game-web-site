import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./blackjack.css";
import DeckList from "./deckList";
import Card from "./Card";
import getRandomCard from "./getRandomCard";

let playerHand = [];
let dillerHand = [];
let deck = [];
let playerSum = 0;
let dillerSum = 0;

const Blackjack = () => {
  let player = {
    name: "Dor",
    chips: "750",
  };
  let playerFullName = player.name + ": $" + player.chips;
  let [hasBlackJack, setHasBlackjack] = useState(false);
  let [isAlive, setIsAlive] = useState(false);
  let [message, setMessage] = useState("Welcome To The Tabale");
  let [playerHandToRender, setPlayerHandToRender] = useState([]);
  let [dillerHandToRender, setDillerHandToRender] = useState([]);
  let cardMessage = "Cards: ";

  const startGame = () => {
    deck = new DeckList().deckList;
    playerHand = [];
    dillerHand = [];
    setIsAlive(true);
    setHasBlackjack(false);
    let firstCard = getRandomCard(deck);
    let secondCard = getRandomCard(deck);
    let thirdCard = getRandomCard(deck);
    let forthCard = getRandomCard(deck);
    playerSum = firstCard.blackjackValue + secondCard.blackjackValue;
    dillerSum = forthCard.blackjackValue;
    playerHand.push(firstCard);
    playerHand.push(secondCard);
    dillerHand.push(thirdCard);
    dillerHand.push(forthCard);
    console.log(playerHand);
    console.log(dillerHand);
    console.log(deck);
    renderGame();
  };

  const renderGame = () => {
    theRenderedCards();
    if (playerSum <= 20) {
      setMessage("Do you want to draw a new card?");
    } else if (playerSum === 21) {
      setMessage("You've got Blackjack!");
      setHasBlackjack(true);
    } else {
      setMessage("You're out of the game!");
      setIsAlive(false);
    }
  };

  const newCard = () => {
    if (isAlive && !hasBlackJack) {
      let new_card = getRandomCard(deck);
      playerSum += new_card.blackjackValue;
      playerHand.push(new_card);
      renderGame();
    } else {
      setMessage("Start a New Game");
    }
  };

  const theRenderedCards = () => {
    setPlayerHandToRender(
      playerHand.map((card) => {
        return (
          <Card
            key={`${card.value + card.sign[0]}`}
            imgURL={card.imgURL}
            value={card.value}
            sign={card.sign}
          />
        );
      })
    );
    //TODO:Render diller cards logig
    setDillerHandToRender(
      dillerHand.map((card, index) => {
        if (!index) {
          return (
            <Card
              key={`Disable`}
              imgURL={"./images/Cards/blue_back.png"}
              value=""
              sign=""
            />
          );
        } else {
          return (
            <Card
              key={`${card.value + card.sign[0]}`}
              imgURL={card.imgURL}
              value={card.value}
              sign={card.sign}
            />
          );
        }
      })
    );
  };

  return (
    <div className="blackjack-game">
      <h1 id="black-title">Blackjack</h1>
      <p id="message-par">{message}</p>
      <p>{`Diller Cards: ${dillerSum}`}</p>
      <div className="blackjack--dillerHandToRender">{dillerHandToRender}</div>
      <p id="cards-par">{cardMessage}</p>
      <div className="blackjack--playerHandToRender">{playerHandToRender}</div>
      <p id="sum-par">{`Sum: ${playerSum}`}</p>
      <Button
        variant="contained"
        style={{ marginRight: "5px" }}
        onClick={() => startGame()}
        id="start-btn"
      >
        START GAME
      </Button>
      <Button
        variant="contained"
        style={{ marginRight: "5px" }}
        onClick={() => newCard()}
        id="start-btn"
      >
        HIT
      </Button>
      <Button variant="contained">STAND</Button>{" "}
      <p id="player-par">{playerFullName}</p>
    </div>
  );
};

export default Blackjack;
