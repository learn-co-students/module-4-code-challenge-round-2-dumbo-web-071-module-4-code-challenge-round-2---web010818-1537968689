import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props){
    super(props)

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state={
      filterTerm: ""
    }

  }

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({filterTerm: event.target.value})
  }

  //code kept breaking with my handleChange function so
  // didn't get to test this out in the browser but this
  // is how I would have gone about filtering transactions.
  //i would have then passed this function as a prop to
  //TransactionsList
  filterTransactionList = () => {
    if (this.state.filterTerm !== "") {
      return this.props.transactions.filter(transaction => {
        return transaction.category.includes(this.state.filterTerm) || transaction.description.includes(this.state.filterTerm)
      })
    }
    else {
      return this.props.transactions
    }
  }

  render() {
    console.log(this.props)
    console.log(this.state.filterTerm)
    return (
      <div>
        <Search handleChange={this.handleChange}
          search={this.state.filterTerm}
        />
        <TransactionsList transactions={this.props.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
