import { useState,useEffect } from "react";

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
                
            }
        }
        fetchData(); 
    }, []);

    let BTCValue1 = btc1.usd;
    let ETHValue1 = eth1.usd;
    let BTCValue2 = btc2.usd;
    let ETHValue2 = eth2.usd;
    console.log(BTCValue1);
    const result = (value,coin) => {
        if (value === "buy" && coin === "btc"){
            if(BTCValue1 < BTCValue2){
                return "Coingecko"
            }
            return "Cryptocompare"
        }
        else if (value === "buy" && coin === "eth"){
            if(ETHValue1 < ETHValue2){
                return "Coingecko"
            }
            return "Cryptocompare"
        }
        else if (value === "sell" && coin === "btc"){
            if(BTCValue1 > BTCValue2){
                return "Coingecko"
            }
            return "Cryptocompare"
        }
        else {
            if(ETHValue1 > ETHValue2){
                return "Coingecko"
            }
            return "Cryptocompare"
        }
    }
    let value = "buy";
    let coin = "btc";
    const Submit = () => {
        console.log(result(value,coin));
        setOut(result());
    }; 
    return (
        <div className="Submit">
            <button onClick = {Submit}> Submit </button>
            <p> {out} </p>
        </div>
    )  
}

export default Compare;


