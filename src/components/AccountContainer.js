import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      filteredCategory: []
    }

  }

  getTransactions = (transactions) => {
    this.setState({transactions})
  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(resp => resp.json())
      .then(this.getTransactions)
  }

  handleChange(event) {
    
  }

  render() {
    console.log(this.state.transactions)
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer
