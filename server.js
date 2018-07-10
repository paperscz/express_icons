const express = require('express');
const app = express();

app.get("/icon/:filename", (req, res) => {
    res.sendFile(__dirname + `/assets/${req.params.filename}.svg`);
});

app.get("/icons/list", (req, res) => {
    res.sendFile(__dirname + '/list.json');
    console.log(req.path)
});

app.post("/icon/add/:filename", (req,res) => {
    console.log(req.path)
});

app.listen(3000, () => console.log('Server listening on port 3000...'));
