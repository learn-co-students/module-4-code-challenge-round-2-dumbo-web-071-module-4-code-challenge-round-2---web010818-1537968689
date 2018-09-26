import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props){
    super(props)

    this.state={
      filterTerm: ""
    }

  }

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({filterTerm: event.target.value})
  }

  //not case senstivie!
  filterTransactionList = () => {
    if (this.state.filterTerm !== "") {
      return this.props.transactions.filter(transaction => transaction.category.includes(this.state.filterTerm) || transaction.description.includes(this.state.filterTerm))
    }
    else {
      return this.props.transactions
    }
  }

  render() {
    // console.log(this.props)
    console.log(this.state.filterTerm)
    return (
      <div>
        <Search handleChange={this.handleChange}
          search={this.state.filterTerm}
        />
        <TransactionsList transactions={this.filterTransactionList()}/>
      </div>
    )
  }
}

export default AccountContainer
