const getRandomCard = (dillerDeck) => {
  let randomNum = Math.floor(Math.random() * dillerDeck.length);
  let randomCard = dillerDeck[randomNum];
  dillerDeck.splice(randomNum, 1);
  return randomCard;
};

export default getRandomCard;
