import React from 'react'

const Transaction = ({ posted_at, description, category, amount }) => {
  return (
    <tr>
      <td>{posted_at}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>
        <span style={{'color': amount < 0 ? 'red' : 'green'}}>
          ${(amount / 100).toFixed(2)}
        </span>
      </td>
    </tr>
  )
}

export default Transaction
