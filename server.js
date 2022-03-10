require('dotenv').config()
const express = require('express')
const app = express()
// const pokemon = require('./models/pokemon.js')
const mongoose = require('mongoose')
const Pokemon = require('./models/pokemon.js')
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
// app.use(express.static('public'))

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('<h1> Welcome to the Pokémon App!! </h1>')
})

app.get('/pokemon/seed', (req, res)=>{
  Pokemon.create([
      {
          name:'bulbasaur',
          image:'http://img.pokemondb.net/artwork/bulbasaur',
      },
      {
          name:'ivysaur',
          image:'http://img.pokemondb.net/artwork/ivysaur',
      },       
      {
          name:'venusaur',
          image:'http://img.pokemondb.net/artwork/venusaur',
      },
      {
          name:'charmander',
          image:'http://img.pokemondb.net/artwork/charmander',
      },
      {
          name:'charizard',
          image:'http://img.pokemondb.net/artwork/charizard',
      },
      {
          name:'squirtle',
          image:'http://img.pokemondb.net/artwork/squirtle',
      },
      {
          name:'wartortle',
          image:'http://img.pokemondb.net/artwork/wartortle',
      },
      {
          name:'jigglypuff',
          image:'http://img.pokemondb.net/artwork/jigglypuff',
      },
  ], (err, data)=>{
      res.redirect('/pokemon');
  })
})

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

//SHOW page 
app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (error, foundPokemon) => {
        res.render('Show', {
            pokemon : foundPokemon
        })
    })
})

//DELETE
app.delete('/pokemon/:id', (req, res) => {
    Pokemon.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect('/pokemon')
    })
})

//PUT
app.put('/pokemon/:id', (req, res) => {
    Pokemon.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updadedModel) => {
        res.redirect('/pokemon')
    })
})

//EDIT
app.get('/pokemon/:id/edit', (req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon) => { //find the fruit
        if(!err){
            res.render('Edit', {
            pokemon: foundPokemon //pass in found fruit
            }
        )
        } else {
            res.send({ msg: err.message })
        }
    })
})

//POST
app.post('/pokemon', (req, res) => {
   Pokemon.create(req.body, (error, createdPokemon) => {
       res.redirect('/pokemon')
   })
//    console.log(pokemon)
//    console.log(req.body)
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
})

app.listen(PORT, () => {
    console.log('listening', PORT)
})
