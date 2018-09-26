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

  handleClick = () =>{
    let randArr = [[66,69,69,80],[66,79,79,80], [66,69,69,80,66,79,79,80], [66,79,84,83], [82,79,66,79,84,83],[100, 111, 110, 116, 32, 99, 108, 105, 99, 107, 32, 109, 101, 10], [116, 104, 101, 32, 114, 111, 98, 111, 116, 115, 32, 97, 114, 101, 32, 99, 111, 109, 105, 110, 103, 10]]
    let num = Math.floor(Math.random()*randArr.length)
    let charArr=randArr[num]
    let newArr = []
    charArr.forEach(char=> {
      if(char !== ","){
        newArr.push(String.fromCharCode(char))
      }
    })
    alert(newArr.join())
  }


  render() {
    // console.log(this.state.transactions, "AccountContainer");
    console.log(this.state.searchTerm, "this is search Term");
    return (
      <div>
        <Search handleChange={this.handleChange} handleClick={this.handleClick}/>
        <TransactionsList transactions={this.filterBySearch()}/>
      </div>
    )
  }
}

export default AccountContainer
