const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
var orders=[];
const n=3;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req,res) => {
    res.send('Server is Uppp!')
})

app.post('/discount', (req,res) => {
    console.log("Order Count =  " + orders.length, req.body);
    if(orders.length%n==0 && req.body.code=="10PERC") res.send(true);
    else res.send(false);
})

app.post('/cart', (req, res) => {
    console.log(req.body);
    orders.push(req.body);
    res.send(req.body);
})

app.listen(port, () => {console.log(`Server started on port ${port}`)});