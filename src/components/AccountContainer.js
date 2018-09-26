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
      transactions: transactions
    };
  }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(transactionsData => {
      this.setState({transactions: transactionsData})
    })
  }

  // handleChange(event) {
  //   this.setState((prevState) => {
  //     if(userInput === ''){
  // //       return this.state.transactions
  // //     }else {
  // //       let temp = this.state.transactions.filter((transaction) => {
  // //         transaction.description.includes(userInput) || transaction.description.includes(userInput)
  // //       })
  // //       return temp
  // //     }
  //     }
  // //
  // }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList
          transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
