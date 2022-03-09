const React = require('react')

class Index extends React.Component{
    render(){
    const pokemon = this.props.pokemon
    console.log(pokemon)
        
        return(
            <html lang="en" >
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />                    
                <title> Pokémon Index </title>
            </head>
            <body>
                <div>
                    <h1> All Pokémon </h1>
                    <ul>
                        {pokemon.map((poke, i) => {
                            return(
                                <li key={i}>
                                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)} <a href = {`/pokemon/${poke.id}`}> Info </a>
                                    {/* <form action={`/pokemon/${poke._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE"/> 
                                    </form> */}
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

// const myStyle = {
//     color: '#ffffff',
//     backgroundColor: '#000000',
//   };

// class MyFirstComponent extends React.Component() {
//     render(){
//         return (
//             <div style={myStyle}> My First React Component! </div> 
//         )
//     }
// }