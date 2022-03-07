const React = require('react')
class Show extends React.Component{
    render(){
        const pokemon = this.props.pokemon
        return(
            <div> 
                <h1> Gotta Catch Em All </h1>
                <ul>  
                    <li>
                        <h2> Their name is {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} </h2> 
                        <img src = {`${pokemon.img}.jpg`} height = "160px" width = "160px"></img>
                        <a href = {`/pokemon`}> Home Page </a>
                    </li>                                
                </ul>
            </div>
        )
    }
}

module.exports = Show 