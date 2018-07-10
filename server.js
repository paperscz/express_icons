const express = require('express');
const app = express();

app.get("/:filename", (req, res) => {
    res.sendFile(__dirname + `/assets${req.path}.svg`);
});

app.get("/list", (req, res) => {
    res.sendFile(__dirname + '/list.json');
});

app.post("/add/:filename", (req,res) => {
    console.log(req);
});

app.listen(3000, () => console.log('Server listening on port 3000...'));
