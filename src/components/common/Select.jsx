import React from 'react';

const SelectDropdown = ({ name, value, options, onChange, placeholder, testId }) => {
  return (
    <select 
      name={name} 
      className="custom-select rounded-md p-2 mx-1 outline-none text-[#5B6170] font-bold text-xs cursor-pointer"  
      value={value}  
      onChange={onChange}
      data-test-id={testId}  // Add the data-test-id attribute here
      required
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((option, index) => (
        <option 
          key={index} 
          className="text-[#5B6170] font-bold text-xs" 
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectDropdown;
