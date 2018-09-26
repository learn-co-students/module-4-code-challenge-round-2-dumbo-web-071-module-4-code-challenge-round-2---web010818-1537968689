import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {


  searchTerm = () => {
  console.log(this.props.transactionArray)

  if(this.props.searchTerm === ''){

     return this.props.transactionsArray

  }else{
      return this.props.transactionsArray.filter((transaction) =>{

        return transaction.category || transaction.descrtiprion === this.props.searchTerm
    })
    }
}






  render() {


    return (
      <div>
        <Search handleChange={this.props.handleChange}/>
        <TransactionsList transactionArray={this.props.transactionArray} />
      </div>
    )
  }
}

export default AccountContainer
