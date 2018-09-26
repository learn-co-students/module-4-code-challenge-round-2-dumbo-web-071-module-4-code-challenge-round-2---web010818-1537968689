import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'
import Transaction from './Transaction'

class AccountContainer extends Component {

  constructor() {
    super();
    this.state = {
      //transactions: transactions
      transactions: [],
      query: " " //my query is set to an empty string i want to twite code that changes it based on what the user's input
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    //.then(console.log) - i get back an array of 19 transaction objects
    .then(transaction => this.setState({transactions: transaction}))
  }

  handleInputChange = () => {
     this.setState({
       query: this.search.value
     })
   }

  handleChange(event) {
    // your code here
  }

  render() {

    return (
      <div>
        <Search query={this.state.query} handleInputChange={this.handleInputChange}/>
        <TransactionsList trans={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
