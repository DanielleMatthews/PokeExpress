const express = require('express')
const app = express()
const pokemon = require('./models/pokemon.js')
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1> Welcome to the Pokémon App!! </h1>')
})

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/pokemon', function(req, res){
    res.render('Index', {pokemon : pokemon})
})

app.get('/pokemon/:indexOfPokeArray', (req, res) => {
    res.render('Show', {
        poke: pokemon[req.params.indexOfPokeArray]
    })
})

app.listen(port, () => {
    console.log('listening', port)
})
