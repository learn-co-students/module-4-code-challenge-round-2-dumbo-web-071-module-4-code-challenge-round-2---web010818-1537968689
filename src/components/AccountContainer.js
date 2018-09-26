import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  constructor() {
    super()
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

    this.state = {
      transactions: [],
      term: ''
    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(data => {
      this.setState({transactions: data})
    })
  }

  handleFilter = () => {
    let filteredTransactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.term.toLowerCase()) || transaction.category.toLowerCase().includes(this.state.term.toLowerCase()))
    this.setState({transactions: filteredTransactions})
  }


  handleChange = (event) => {
    this.setState({term: event.target.value}, () => {
      this.handleFilter();
    })
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} term={this.state.term}/>
        <TransactionsList handleFilter={this.handleFilter} transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
