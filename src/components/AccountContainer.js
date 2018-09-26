import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()
this.state= {transactions: [],
            searchQuery: [],
            transactionsToRender: []
            }
this.handleChange = this.handleChange.bind(this)
// this.filterBySearch = this.filterBySearch.bind(this)

  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(transactions => {
      this.setState({transactions}, ()=> console.log(transactions))
    })
  }

  handleChange(event) {
    this.setState({searchQuery: event.target.value}, ()=>console.log(this.state.searchQuery))
  }

  // filterBySearch(){
  //   this.state.transactions.map(transaction=>{
  //     if(transaction.description.toString().includes(`${this.state.searchQuery}`) || transaction.category.toString().includes(`${this.state.searchQuery}`)){
  //       this.setState({transactionsToRender: [...this.state.transactionsToRender, transaction]}, ()=> console.log("filterer", this.state.transactionsToRender))
  //     }
  //   })
  // }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
