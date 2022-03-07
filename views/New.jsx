const React = require('react')

class New extends React.Component {
  render(){
    return (
      <div>
        <h1>New Fruit Page</h1>
        <form action="/fruits" method="POST">
          Name: <input type="text" name="name" /> <br/>
          {/* Image: <input type="text" name="image" /> <br /> */}
          <input type="submit" name="" value="Create Pokemon"/>
        </form>
      </div>
    )
  }
}

module.exports = New