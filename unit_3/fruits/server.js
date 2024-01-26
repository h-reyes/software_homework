const express = require('express');
const fruits = require('./models/fruits.js')
const app = express();

app.set('view engine', 'jsx');
app.engine('.jsx', require('express-react-views').createEngine());

app.get('/fruits/', (req, res) => {
    res.send(fruits);
});

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(3000, () => {
    console.log('listening');
});