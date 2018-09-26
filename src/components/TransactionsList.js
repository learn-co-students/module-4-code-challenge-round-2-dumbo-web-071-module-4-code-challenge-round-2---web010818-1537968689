import React from 'react'
import Transaction from './Transaction'

const TransactionsList = ({transactions, searchTerm}) => {

	const renderTransactions = () => {
		let mappedTransactions = transactions.map( t => {
			return <Transaction transaction={t} />
		})

		return searchTerm ? filterWithSearchTerm(mappedTransactions) : mappedTransactions
	}

	const filterWithSearchTerm = (transactions) => {
		return transactions.filter( transaction => {
			let t = transaction.props.transaction
			return (
				t.description.toLowerCase().includes(searchTerm) || t.category.toLowerCase().includes(searchTerm)
			)
		})
	}

	return (
		<table className="ui celled striped padded table">
			<tbody>
				<tr>
					<th>
						<h3 className="ui center aligned header">
						Posted At
						</h3>
					</th>
					<th>
						<h3 className="ui center aligned header">
						Description
						</h3>
					</th>
					<th>
						<h3 className="ui center aligned header">
						Category
						</h3>
					</th>
					<th>
						<h3 className="ui center aligned header">
						Amount
						</h3>
					</th>
				</tr>

				{/* {"... your code here..."} */}
				{renderTransactions()}

			</tbody>
		</table>
	)
}

export default TransactionsList
