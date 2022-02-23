const express = require('express')
const connectDb = require('./connectDb')
const data = require('./models/Data')
const app = express()
const port = process.env.PORT || 3000
// 3P1nHCg68z6FPYDx

connectDb()

app.use(express.json())

app.post('/add', (req, res) => {
    delete req.body._id;
    const Data = new data({
        ...req.body
    });
    Data.save()
        .then(() => res.status(201).json({ message: 'object saved' }))
        .catch(error => res.status(400).json({ error }));
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})