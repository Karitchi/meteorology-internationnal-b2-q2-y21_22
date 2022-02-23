const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use('/', (req, res) => {
    res.send('hello')
})

app.get('/info', (req, res)=> {
    res.send(req.query);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});