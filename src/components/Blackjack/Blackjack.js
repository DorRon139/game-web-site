import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./blackjack.css";
import DeckList from "./deckList";
import Card from "./Card";
import getRandomCard from "./getRandomCard";

let playerCards = [];
let dillerCards = [];
let dillerDeck = [];
let sum = 0;

const Blackjack = () => {
  let player = {
    name: "Dor",
    chips: "750",
  };
  let playerFullName = player.name + ": $" + player.chips;
  let [hasBlackJack, setHasBlackjack] = useState(false);
  let [isAlive, setIsAlive] = useState(false);
  let [message, setMessage] = useState("Welcome To The Tabale");
  let [sumMessage, setSumMessage] = useState("Sum: ");
  let [cardsToRender, setCardsToRender] = useState([]);
  let cardMessage = "Cards: ";

  const startGame = () => {
    dillerDeck = new DeckList().deckList;
    playerCards = [];
    setIsAlive(true);
    setHasBlackjack(false);
    let firstCard = getRandomCard(dillerDeck);
    let secondCard = getRandomCard(dillerDeck);
    sum = firstCard.blackjackValue + secondCard.blackjackValue;
    playerCards.push(firstCard);
    playerCards.push(secondCard);
    renderGame();
  };

  const renderGame = () => {
    setSumMessage("Sum: " + sum);
    theRenderedCards();
    if (sum <= 20) {
      setMessage("Do you want to draw a new card?");
    } else if (sum === 21) {
      setMessage("You've got Blackjack!");
      setHasBlackjack(true);
    } else {
      setMessage("You're out of the game!");
      setIsAlive(false);
    }
  };

  const newCard = () => {
    if (isAlive && !hasBlackJack) {
      let new_card = getRandomCard(dillerDeck);
      sum += new_card.blackjackValue;
      playerCards.push(new_card);
      renderGame();
    } else {
      setMessage("Start a New Game");
    }
  };

  const theRenderedCards = () => {
    setCardsToRender(
      playerCards.map((card) => {
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
  };

  return (
    <div className="blackjack-game">
      <h1 id="black-title">Blackjack</h1>
      <p id="message-par">{message}</p>
      <p id="cards-par">{cardMessage}</p>
      <div className="blackjack--cardsRender">{cardsToRender}</div>

      <p id="sum-par">{sumMessage}</p>
      <Button
        variant="contained"
        style={{ margin: "5px" }}
        onClick={() => startGame()}
        id="start-btn"
      >
        START GAME
      </Button>

      <Button variant="contained" onClick={() => newCard()} id="start-btn">
        NEW CARD
      </Button>
      <p id="player-par">{playerFullName}</p>
    </div>
  );
};

export default Blackjack;
