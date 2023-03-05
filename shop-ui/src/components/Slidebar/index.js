import React, { useState, useEffect } from 'react';
import './Slidebar.css';

const Slidebar = (props) => {
  const { products, onFilterChange } = props;
  const [nameFilter, setNameFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState(0);

  const handleNameFilterChange = (event) => {
    const value = event.target.value;
    setNameFilter(value);
    onFilterChange({ nameFilter: value, priceFilter });
  };

  const handlePriceFilterChange = (event) => {
    const value = parseInt(event.target.value);
    setPriceFilter(value);
    onFilterChange({ nameFilter, priceFilter: value });
  };
//hàm onFilterChange được gọi để truyền lại giá trị của các checkbox lên component cha
  return (
    <div className="Slidebar">
      <h3>Filter</h3>
      <div className="FilterGroup">
        <label htmlFor="nameFilter">Name:</label>
        <input
          type="text"
          id="nameFilter"
          value={nameFilter}
          onChange={handleNameFilterChange}
        />
      </div>
      <div className="FilterGroup">
        <label htmlFor="priceFilter">Price:</label>
        <select
          id="priceFilter"
          value={priceFilter}
          onChange={handlePriceFilterChange}
        >
          <option value="0">All</option>
          <option value="1000000">Less than 1.000.000</option>
          <option value="2000000">Less than 2.000.000</option>
          <option value="3000000">Less than 3.000.000</option>
        </select>
      </div>
    </div>
  );
};
export default Slidebar;
