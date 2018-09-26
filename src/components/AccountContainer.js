import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      allTransactions: transactions,
      filteredTransactions: []
    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(r => r.json())
    .then(r => this.setState({ allTransactions: r, filteredTransactions: r}))
  }

  handleChange = (event) => {
    const searchAll = this.state.allTransactions

    const filteredArr = searchAll.filter(transaction => transaction.description.toLowerCase().includes(event.target.value.toLowerCase()))

    this.setState({
      filteredTransactions: filteredArr
    })
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList allTransactions={this.state.filteredTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
