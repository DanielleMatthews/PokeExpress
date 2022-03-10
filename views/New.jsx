const React = require('react')

class New extends React.Component {
  render(){
    return (
      <div>
        <link rel="stylesheet" href="/css/app.css" />

        <h1>New Pokemon </h1>
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" /> <br/>
          Image Link: <input type="text" name="image" /> <br />
          <input type="submit" name="" value="Create Pokemon"/>
        </form>
      </div>
    )
  }
}

module.exports = New