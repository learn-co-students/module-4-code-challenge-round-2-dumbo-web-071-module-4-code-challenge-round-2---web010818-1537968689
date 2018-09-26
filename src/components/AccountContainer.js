import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {


    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  // }

  handleChange(event) {
    // your code here
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <Search />
        <TransactionsList transactions={this.props.transactions}/>
      </div>
    )
  }

}

export default AccountContainer
