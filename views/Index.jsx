const React = require('react')

class Index extends React.Component{
    render(){
    const pokemon = this.props.pokemon
    
        return(
            <html lang="en" >
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />                    
                <title> Pokémon Index </title>
                <link rel="stylesheet" href="/css/app.css" />
            </head>
            <body>
                <div>
                    <h1> All Pokémon </h1>
                    <ul>
                        {pokemon.map((poke, i) => {
                            return(
                                <li key={i}>
                                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)} <br></br>
                                    <a href = {`/pokemon/${poke.id}`}> Info </a> <br></br>
                                    <a href={`/pokemon/${poke._id}/edit`}> Edit </a> 
                                    <form action={`/pokemon/${poke._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE"/> 
                                    </form> <br></br>
                                </li>                                
                            )
                        })}
                    </ul>
                    <nav> 
                        <a href ="/pokemon/new"> Create a New Pokémon </a>
                    </nav>
                </div>
            </body>
        </html>
        )
    }
}

module.exports = Index


