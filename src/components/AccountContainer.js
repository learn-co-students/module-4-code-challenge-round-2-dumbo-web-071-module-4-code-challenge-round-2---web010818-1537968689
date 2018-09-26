import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import { transactions } from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactions,
      search: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.filterTransactions = this.filterTransactions.bind(this)
  }

  componentWillMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(transactions => this.setState({ transactions }))
  }

  handleChange(event) {
    this.setState({ search: event.target.value })
  }

  filterTransactions() {
    let search = this.state.search.toLowerCase()
    return this.state.transactions.filter(({description, category}) =>
      description.toLowerCase().includes(search) || 
      category.toLowerCase().includes(search)
    )
  }

  render() {
    return (
      <div>
        <Search
          handleChange={this.handleChange}
          inputVal={this.state.search} />
        <TransactionsList transactions={this.filterTransactions()} />
      </div>
    )
  }
}

export default AccountContainer
