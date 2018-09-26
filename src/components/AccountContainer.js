import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      allTransactions: [],
      filteredTransactions: []
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(r => r.json())
    .then(r => this.setState({ allTransactions: r}))
  }

  handleChange = (event) => {
    const searchAll = this.state.allTransactions
    const filteredArr = searchAll.filter(transaction => transaction.description.includes(event.target.value))

    this.setState({
      filteredTransactions: filteredArr
    })

  }

  allTransactions(filteredArr) {
    return filteredArr
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
