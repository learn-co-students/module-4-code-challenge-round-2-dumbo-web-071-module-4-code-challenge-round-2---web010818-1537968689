import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

const URL = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {

	constructor() {
		super()

		// get a default state working with the data imported from TransactionsData
		// use this to get the functionality working
		// then replace the default transactions with a call to the API
		this.state = {
			searchTerm: '',
			transactions: []
		}
	}

	componentDidMount() {
		fetch(URL)
		.then(res => res.json())
		.then( transactions => {
			console.log(transactions)
			this.setState({
				transactions	
			})
		})
	}
	

	handleChange = (e) => {
		// your code here
		this.setState({
			searchTerm: e.target.value.toLowerCase()
		},() => console.log(this.state))
	}

	render() {

		return (
		<div>
			<Search handleChange={this.handleChange} />
			<TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
		</div>
		)
	}
}

export default AccountContainer
