class Player {
  constructor(name, chips) {
    this.name = name;
    this.chips = chips;
    this.hand = [];
    this.sum = 0;
    this.inGame = true;
    this.bet = 0;
  }

  setNewHand() {
    this.hand = [];
    this.sum = 0;
    this.inGame = true;
  }

  setCard(card) {
    this.hand.push(card);
    this.updateSum(card);
    this.checkSumForEveryNewCard();
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

export default Player;
