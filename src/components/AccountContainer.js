import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state={
        transactions: [],
        searchTerm:null
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  handleChange = (event) =>{
    // your code here
    // console.log(event.target.value)
    let term = event.target.value
    this.setState({searchTerm: term})
  }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(transactions => this.setState({transactions}))
  }

  filterBySearch = () =>{
    if(this.state.searchTerm){
      return this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || transaction.category.toLowerCase().includes(this.state.searchTerm.toLowerCase())   ) 
    }else{
      return this.state.transactions
    }
  }


  render() {
    // console.log(this.state.transactions, "AccountContainer");
    console.log(this.state.searchTerm, "this is search Term");
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.filterBySearch()}/>
      </div>
    )
  }
}

export default AccountContainer
