import React from 'react'

const TransactionsList = () => {

  // singleTransaction = () => {
  //   props.transactions.map((transaction) => <Transaction transaction={transaction}/>)
  // }
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              posted
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              amount
            </h3>
          </th>
        </tr>

        {"... your code here..."}

      </tbody>
    </table>
  )
}

export default TransactionsList
