import React, { Component } from 'react'
import AccountContainer from './AccountContainer'

import '../stylesheets/App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      transactionArray: []
    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(apiTransactions => this.setState({transactionArray: apiTransactions}))
  }



  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>

        <AccountContainer transactions={this.state.transactionArray}/>

      </div>
    )
  }
}

export default App
