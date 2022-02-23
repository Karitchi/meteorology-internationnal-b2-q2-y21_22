const express = require('express')
const connectDb = require('./connectDb')
const bodyParser = require('body-parser')
const data = require('./models/Data')
const Data = require('./models/Data')
const { send } = require('express/lib/response')
const app = express()
const port = process.env.PORT || 3000
// 3P1nHCg68z6FPYDx

connectDb()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})


app.get('/findAll', (req, res) => {
    Data.find({}, (err, arrayOfResults) => {
        if (err) {
            console.log(err)
        } else {
            console.log(arrayOfResults)
        }
        res.status(201).json(arrayOfResults)
    })
    // res.redirect('/')
})

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