import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {

    const renderTransactions = () => {
        return props.filteredList().map((trans) => {
            return <Transaction 
                        postedAt={trans.posted_at} 
                        description={trans.description} 
                        category={trans.category} 
                        amount={trans.amount}
                    />
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

                {renderTransactions()}

            </tbody>
        </table>
    )
}



export default TransactionsList
