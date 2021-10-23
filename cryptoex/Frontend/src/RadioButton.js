import React, { Component} from "react";


var action = {};
var coin = {};
class RadioButtons extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    // console.log(event.target.value);
    action['action'] = (event.target.value);
    console.log(action);
//    const action = event.target.value;
  }
  onChangeValue1(event) {
    // console.log(event.target.value);
    coin['coin'] =  (event.target.value);
    console.log(coin);
//    const action = event.target.value;
  }
  
  render() {
    return (
        <div id="Parent">
            <div onChange={this.onChangeValue}>
                <input type="radio" value="Buy" name="UserAction" /> Buy
                <input type="radio" value="Sell" name="UserAction" /> Sell
            </div>
            <div onChange={this.onChangeValue1}>
                <input type="radio" value="BTC" name="Coin" /> Bitcoin
                <input type="radio" value="ETH" name="Coin" /> Ethereum
            </div>
        </div>
      
      
    );
  }
}
export {action};
export {coin};
export default RadioButtons;

