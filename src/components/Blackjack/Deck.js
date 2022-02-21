import CardObject from "./cardClass";

const SIGNED = ["Clubs", "Spades", "Diamonds", "Hearts"];
const VALUES = {
  A: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 10,
  Q: 10,
  K: 10,
};

const generateDeck = () => {
  return SIGNED.flatMap((sign) => {
    return Object.keys(VALUES).map((value) => {
      const imgURL = `./images/Cards/${value}${sign[0]}.png`;
      const blackjackValue = VALUES[value];
      return new CardObject(imgURL, blackjackValue, sign, value);
      // value: value,
      // sign: sign,
      // blackjackValue: blackjackValue,
      // imgURL: imgURL,
    });
  });
};

class DeckList {
  constructor() {
    this.deckList = generateDeck();
  }
}

export default DeckList;
