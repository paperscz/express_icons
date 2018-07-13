const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.get("/icon/:filename", (req, res) => {
    res.sendFile(__dirname + `/assets/${req.params.filename}.svg`);
});

app.get("/icons/list", (req, res) => {
    res.sendFile(__dirname + '/list.json');
});

app.post("/icon/add/:filename", (req,res) => {
    
});

app.listen(app.get('port'), () => console.log('Server listening on port 3000...'));
