import React, { Component,useState} from "react";

class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }
  onChangeValue(event) {
    console.log(event.target.value);
//    const action = event.target.value;
  }

  render() {
    return (
      <div onChange={this.onChangeValue}>
        <input type="radio" value="Buy" name="UserAction" /> Buy
        <input type="radio" value="Sell" name="UserAction" /> Sell
        <input type="radio" value="BTC" name="Coin" /> Bitcoin
        <input type="radio" value="ETH" name="Coin" /> Ethereum
      </div>
    );
  }
}


export default Demo1;
