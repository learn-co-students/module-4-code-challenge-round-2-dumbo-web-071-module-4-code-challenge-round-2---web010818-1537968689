import React from 'react'

const Search = (props) => {
  console.log("SEARCH", props);

  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={props.handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
