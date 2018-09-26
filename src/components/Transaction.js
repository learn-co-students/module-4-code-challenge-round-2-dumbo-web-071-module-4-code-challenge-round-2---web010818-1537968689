import React from 'react'

const Transaction = ({transaction}) => {
  return (
    <tr data-id={transaction.id}>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  )
}

export default Transaction
