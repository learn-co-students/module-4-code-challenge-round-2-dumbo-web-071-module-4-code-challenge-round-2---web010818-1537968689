import React from 'react'
import Transaction from './Transaction'

const TransactionsList = ({ transactions }) => {

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

        {
          transactions.map(transaction => (
            <Transaction key={transaction.id} {...transaction} />
          ))
        }

        <tr style={{ fontWeight: 'bold' }}>
          <td colSpan={3}>Total</td>
          <td>
            {
             (transactions.reduce((accum, {amount}) => (accum + amount), 0) / 100).toFixed(2)
            }
          </td>
        </tr>


      </tbody>
    </table>
  )
}

export default TransactionsList
