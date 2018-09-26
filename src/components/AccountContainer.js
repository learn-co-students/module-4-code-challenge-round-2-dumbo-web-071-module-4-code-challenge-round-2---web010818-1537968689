import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

	state = {
			originalTransactions: [],
			transactions: []
	}

	componentDidMount() {
		fetch('https://boiling-brook-94902.herokuapp.com/transactions')
			.then(res => res.json())
			.then(transactions => this.setState({
				transactions: transactions,
				originalTransactions: transactions
			}))
	}

	searchBy(term) {
		const newTransactions = this.state.originalTransactions.filter(t => {
			return (t.description + t.category).toLowerCase().search(term.toLowerCase()) !== -1
		})
		return newTransactions
	}

	handleChange = e => {
		this.setState({transactions: this.searchBy(e.target.value)})
	}

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
