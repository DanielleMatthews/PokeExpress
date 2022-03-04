const React = require('react')
const pokemon = require('../models/pokemon')

class Index extends React.Component{
    render(){
        
        const poke = this.props.poke
        return(
            <div>
                <h1> All Pokemon </h1>
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
