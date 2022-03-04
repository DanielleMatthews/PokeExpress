const React = require('react')
class Show extends React.Component{
    render(){
        const poke = this.props.poke
        return(
            <div> 
                <h1> Show </h1>
                pokemon name is {poke.name}
            </div>
        )
    }
}

module.exports = Show 