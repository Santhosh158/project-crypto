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
    action['action'] = (event.target.value);
    console.log(action);
  }
  onChangeValue1(event) {
    coin['coin'] =  (event.target.value);
    console.log(coin);
  }
  
  render() {
    return (
        <div id="Parent">
            <div onChange={this.onChangeValue}>
                <h4 >  Do you want to buy or sell </h4>
                <div className="Radio1">
                <input type="radio" value="Buy" name="UserAction" /> Buy
                <input type="radio" value="Sell" name="UserAction" /> Sell
                </div>
                
            </div>
            <div onChange={this.onChangeValue1}>
                <h4> Please select the coin </h4>
                <div className="Radio2">
                <input type="radio" value="BTC" name="Coin" /> Bitcoin
                <input type="radio" value="ETH" name="Coin" /> Ethereum
                </div>
            </div>
        </div>
      
      
    );
  }
}
export {action};
export {coin};
export default RadioButtons;

