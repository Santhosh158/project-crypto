import express from 'express';
import fetch from 'node-fetch';
import path from 'path';


const app = express();
const __dirname = path.resolve();



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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('Frontend/public'));
    
app.get('/',(req,res) =>{
    res.send('Server is ready');
});

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname,"Frontend","public","index.html"));
// });

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Frontend', 'public', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});