// components/TodoFilter.js
import React, { useState } from 'react';

function TodoFilter({ setFilter }) {
  const [filterColor, setFilterColor] = useState('#dc3545');

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);

    if (value === 'Completed') {
      setFilterColor('green');
    } else {
      setFilterColor('#dc3545');
    }
  };

  return (
    <div className="todo-filter">
      <select
        onChange={handleFilterChange}
        className="filter-dropdown"
        style={{ backgroundColor: filterColor }}
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
    </div>
  );
}

export default TodoFilter;
