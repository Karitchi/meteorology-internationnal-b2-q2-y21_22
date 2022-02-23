const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', function (req, res) {
    res.send(req.query);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});