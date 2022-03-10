const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./layout/Default.jsx')

class Home extends React.Component{
  render() {
    return (
      <DefaultLayout title="Home Page">      
          <link rel="stylesheet" href="/css/app.css" />
         <h1> Welcome to the Pokémon App! </h1> <br></br>
         <a href = "/pokemon" > See Pokémon </a>
      </DefaultLayout>
    )
  }
}
module.exports= Home