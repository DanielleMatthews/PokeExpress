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

app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {
        pokemon : pokemon[req.params.id]
    })
})

app.listen(port, () => {
    console.log('listening', port)
})
