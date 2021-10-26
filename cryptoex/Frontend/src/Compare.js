import React,{ useState,useEffect } from "react";
import {coin,action} from "./RadioButton";
const Compare = () => {
    
    const [btc1,setBtc1] = useState([]);
    const [eth1,setEth1] = useState([]);
    const [btc2,setBtc2] = useState([]);
    const [eth2,setEth2] = useState([]);
    const [out,setOut] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                fetch('/api/Ex1') 
                .then((res) => res.json()) 
                .then((res) => {
                    setBtc1(res.bitcoin);
                    setEth1(res.ethereum);   
                 });
                 fetch('/api/Ex2') 
                .then((res) => res.json()) 
                .then((res) => {
                    setBtc2(res.BTC);
                    setEth2(res.ETH);
                 });
            } catch(err){
                return "" ;
            }
        }
        fetchData(); 
    }, []);
    
    
    const result = (props) => {
        const BTCValue1 = btc1.usd;
        const ETHValue1 = eth1.usd;
        const BTCValue2 = btc2.USD;
        const ETHValue2 = eth2.USD;
        
        console.log(props.action[0].action);
        console.log(props.coin[0].coin);

        
        if ( props.action[0].action === "Buy" && props.coin[0].coin === "BTC"){
            if(BTCValue1 < BTCValue2){
                return "You can checkout Coingecko to buy bitcoin"
            }
            return "You can checkout Cryptocompare to buy bitcoin"
        }
        else if (props.action[0].action === "Buy" && props.coin[0].coin === "ETH"){
            if(ETHValue1 < ETHValue2){
                return "You can checkout Coingecko to buy ethereum"
            }
            return "You can checkout Cryptocompare to buy ethereum"
        }
        else if (props.action[0].action === "Sell" && props.coin[0].coin === "BTC"){
            if(BTCValue1 > BTCValue2){
                return "You can checkout Coingecko to sell bitcoin"
            }
            return "You can checkout Cryptocompare to sell bitcoin"
        }
        else if (props.action[0].action === "Sell" && props.coin[0].coin === "ETH"){
            if(ETHValue1 > ETHValue2){
                return "You can checkout Coingecko to sell ethereum"
            }
            return "You can checkout Cryptocompare to sell ethereum"
        }
        else {
            return "Please make the above selections"
        }
    }
    let props = {action:[action],coin:[coin]};
    const Submit = () => {
        setOut(result(props));
    }; 
    return (
        <div className="Submit">
            <button onClick = {Submit}> Submit </button>
            <p> {out} </p>
        </div>
    )  
}
  
export default Compare;

