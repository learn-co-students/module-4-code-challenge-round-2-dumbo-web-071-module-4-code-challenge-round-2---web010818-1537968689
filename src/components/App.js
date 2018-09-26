import React, { Component } from 'react'
import AccountContainer from './AccountContainer'

import '../stylesheets/App.css'

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     transactionArray: [] // I'll need to pass down my transactionArray to the AccountContainer
  //   }
  // }

  // componentDidMount() {
  //   fetch('https://boiling-brook-94902.herokuapp.com/transactions')
  //   .then(resp => resp.json())
  //   //.then(console.log) - i get back an array of 19 transaction objects
  //   .then(transaction => this.setState({transactionArray: transaction}))
  // }


  render() {
    console.log(this.state)
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>

        <AccountContainer
          //trans={this.state.trans}
        />

      </div>
    )
  }
}

export default App
