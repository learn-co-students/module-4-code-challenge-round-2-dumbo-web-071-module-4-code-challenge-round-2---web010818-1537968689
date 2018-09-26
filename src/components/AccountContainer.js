import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
      this.state = {
        transactionArray: []
      }

      fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(data => {
        this.setState({transactionArray: data})
      })
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  handleChange(event) {
    // console.log("EVENT", event.target.value)

    let descriptionArray = this.state.transactionArray.filter((transaction) => {
        return transaction.description.includes(event.target.value)
    })
    // console.log("AAA", descriptionArray)
    let categoryArray = this.state.transactionArray.filter((transaction) => {
        return transaction.category.includes(event.target.value)
    })

    let newArray = descriptionArray.concat(categoryArray);
    // console.log("ARRRRRAY", newArray);
    this.setState({transactionArray: newArray})
  }

  render() {
    console.log("STATE", this.state.transactionArray)

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactionArray={this.state.transactionArray}/>
      </div>
    )
  }
}

export default AccountContainer
