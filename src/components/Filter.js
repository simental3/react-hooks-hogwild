import React from "react";

function Filter({ showGreased, onCheckGreased, sortBy, onChangeSortBy }) {
  return (
    <div className="ui menu">
      <div className="ui item">
        <label>Show Greased Pigs?</label>
      </div>
      <div className="ui item">
        <input
          className="ui toggle checkbox"
          type="checkbox"
          checked={showGreased}
          onChange={(e) => onCheckGreased(e.target.checked)}
        />
      </div>
      <div className="ui item">
        <label>Sort By</label>
      </div>
      <div className="ui item">
        <select
          className="ui dropdown menu"
          value={sortBy}
          onChange={(e) => onChangeSortBy(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>   
    </div>
  )
}

export default Filter;