const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
          <link rel="stylesheet" href="/css/app.css" />
          <form action = {`/pokemon/${this.props.pokemon._id}?_method=PUT`} method = "POST">
          Name: <input type="text" name="name" defaultValue={this.props.pokemon.name}/><br/>
          Image Link: <input type="text" name="image"  defaultValue={this.props.pokemon.image}/><br/>
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit