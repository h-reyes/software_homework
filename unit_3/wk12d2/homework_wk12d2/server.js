const express = require("express");
const app = express();

let bottle_count = 99;

app.get('/', (req,res) => {
    res.send(`<h1>There are ${bottle_count} bottles of milk on the wall.</h1>
    <br/>
    <a href="/${bottle_count - 1}"> Take One Down and Pass It Around!</a>
    `);
});

app.get(`/:number_of_bottles`, (req, res) => {
    const {number_of_bottles} =  req.params;
    const bottle_remaining = parseInt(number_of_bottles);
    if (bottle_remaining === 0) {
        res.send(`
        <h1> No more bottles of milk on the wall</h1>
        <a href="/">Start over</a>
        `);
    } else {
        res.send(`
        <h1>${bottle_remaining} Bottles of milk on the wall</h1>
        <a href = "/${bottle_remaining - 1}"> Take one down and pass it around</a>
        `);
    }
});

app.listen(3000, () => {
    console.log("listening on port 3000")
});

