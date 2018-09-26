import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import { transactions } from '../transactionsData'

class AccountContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            api: "https://boiling-brook-94902.herokuapp.com/transactions",
            filter: "",
            transactions: []
        }
    }

    componentDidMount() {
        fetch(this.state.api)
            .then(res => res.json())
            .then(json => this.setState({ transactions: json }))
    }

    handleChange= (event) => {
        this.setState({filter: event.target.value})
    }

    filteredList= () => {
        return this.state.transactions.filter((trans) => {
            return (trans.category.includes(this.state.filter) || trans.description.includes(this.state.filter))
        })
    }

    render() {

        return (
            <div>
                <Search 
                    handleChange={this.handleChange}
                    filter={this.state.filter}
                />
                <TransactionsList filteredList={this.filteredList}/>
            </div>
        )
    }
}

export default AccountContainer
