const React = require('react')
const pokemon = require('../models/pokemon')
class Index extends React.Component{
    render(){
        const poke = this.props.poke
        return(
            <div>
                <h1> Index </h1>
                    {pokemon.map((poke, i) => {
                        return(
                            <h3> {poke.name} </h3>
                        )
                    })}
            </div>
        )
    }
}

module.exports = Index