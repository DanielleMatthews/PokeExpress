require('dotenv').config()
const express = require('express')
const app = express()
const pokemon = require('./models/pokemon.js')
const mongoose = require('mongoose')
const Pokemon = require('./models/pokemon.js')
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1> Welcome to the Pokémon App!! </h1>')
})

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//index show ALL
app.get('/pokemon', function(req, res){
    Pokemon.find({}, (error, allPokemon) => {
        res.render('Index', {
        pokemon: allPokemon
        })
    })
})
// GET new pokemon form 
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

//POST
app.post('/pokemon/', (req, res) => {
   Pokemon.create(req.body, (error, createdPokemon) => {
       res.render('/pokemon')
   })
})

app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (error, foundPokemon) => {
        res.render('Show', {
            pokemon : foundPokemon
        })
    })
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
})

app.listen(port, () => {
    console.log('listening', port)
})
