import Card from "./Card";

class CardObject {
  constructor(imgUrl, value, sign, cardNumber) {
    this.imgUrl = imgUrl;
    if (value === 1) {
      this.value = 11;
      this.isAce = true;
    } else {
      this.value = value;
      this.isAce = false;
    }
    this.sign = sign;
    this.cardNumber = cardNumber;
  }

  toCardComponent() {
    return (
      <Card
        key={`${this.cardNumber + this.sign[0]}`}
        imgURL={this.imgUrl}
        value={this.value}
        sign={this.sign}
      />
    );
  }
}

export default CardObject;
