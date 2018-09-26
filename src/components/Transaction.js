import React from 'react'
import TransactionsList from './TransactionsList'

const Transaction = (props) => {
  console.log("show me a single transaction", props.transaction);
  return (
    <tr>
      <td>{props.transaction.posted_at}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
    </tr>
  )
}

export default Transaction
