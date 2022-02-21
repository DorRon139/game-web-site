import DeckList from "./Deck";

class Dealler {
  constructor() {
    this.deck = new DeckList().deckList;
    this.hand = [];
    this.sum = 0;
    this.isDeallerTurn = false;
  }

  setNewHand() {
    this.hand = [];
    this.sum = 0;
    this.deck = new DeckList().deckList;
  }

  handCard(target) {
    let randomNum = Math.floor(Math.random() * this.deck.length);
    let randomCard = this.deck[randomNum];
    this.deck.splice(randomNum, 1);
    target.setCard(randomCard);
  }

  setCard(card) {
    this.hand.push(card);
    this.updateSum(card);
    this.checkSumForEveryNewCard();
  }

  handCardA(target) {
    let randomNum = Math.floor(9);
    let randomCard = this.deck[randomNum];
    this.deck.splice(randomNum, 1);
    target.setCard(randomCard);
  }

  updateSum(card) {
    this.sum += card.value;
  }

  checkSumForEveryNewCard() {
    for (const card of this.hand) {
      if (card.value === 11 && this.sum > 21) {
        this.sum -= 10;
        card.value = 1;
      }
    }
  }
}

export default Dealler;

// handCardK(target) {
//   let randomNum = Math.floor(9);
//   let randomCard = this.deck[randomNum];
//   this.deck.splice(randomNum, 1);
//   target.setCard(randomCard);
// }
