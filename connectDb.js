const mongoose = require('mongoose')


module.exports = () => {
    mongoose.connect('mongodb+srv://nicolas:3P1nHCg68z6FPYDx@projet-internationnal.ggnbr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(() => console.log('database connected'))
        .catch(() => console.log('database connection failed'))
}