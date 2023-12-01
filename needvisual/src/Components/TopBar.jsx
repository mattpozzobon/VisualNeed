import React, { useState } from 'react';

const TopBar = () => {
  const [dropdownOneValue, setDropdownOneValue] = useState('');
  const [dropdownTwoValue, setDropdownTwoValue] = useState('');

  const handleDropdownOneChange = (event) => {
    setDropdownOneValue(event.target.value);
  };

  const handleDropdownTwoChange = (event) => {
    setDropdownTwoValue(event.target.value);
  };

  return (
    <div className="top-bar">
      <select value={dropdownOneValue} onChange={handleDropdownOneChange}>
        <option value="">Select Option</option>
        {/* Add your options here */}
      </select>

      <select value={dropdownTwoValue} onChange={handleDropdownTwoChange}>
        <option value="">Select Option</option>
        {/* Add your options here */}
      </select>
    </div>
  );
};

export default TopBar;
