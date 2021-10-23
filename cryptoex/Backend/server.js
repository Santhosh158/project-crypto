import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.get('/api/Ex1', (req,res) => {

    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd')
    .then(res => res.json())
    .then(json => {
        res.send(json)
    })
});

app.get('/api/Ex2', (req,res) => {
    fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD')
    .then(res => res.json())
    .then(json => {
        res.send(json)
    })
});

app.get('/',(req,res) =>{
    res.send('Server is ready');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});