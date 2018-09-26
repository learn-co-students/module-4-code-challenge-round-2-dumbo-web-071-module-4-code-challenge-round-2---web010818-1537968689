import React, { Component } from 'react'
import AccountContainer from './AccountContainer'

import '../stylesheets/App.css'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {transactionArray: [],
                  searchTerm: ''
    }
  }

  componentDidMount(){

    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(data => {
      this.setState({transactionArray: data})
    })
}


handleChange = (e) => {


  this.setState({
    searchTerm: e.target.value
  })

}
  render() {
    
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>

        <AccountContainer  searchTerm={this.state.searchTerm} handleChange={this.handleChange} transactionArray={this.state.transactionArray}/>

      </div>
    )
  }
}

export default App
