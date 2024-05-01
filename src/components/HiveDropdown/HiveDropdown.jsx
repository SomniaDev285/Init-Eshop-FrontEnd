import React, { useEffect, useState } from 'react'

function HiveDropdown({ value, label, onSelectionChange }) {
  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = (e) => {
    setSelectedValue(e.target.value)
    onSelectionChange(e.target.value)
  }

  useEffect(() => {
    setSelectedValue(value)
  }, [value])

  return (
    <div className="flex flex-col">
      <label className='text-sm' htmlFor="simple-dropdown">
        {label ? label : 'Dropdown Label'}
      </label>
      <select
        id="simple-dropdown"
        value={selectedValue}
        onChange={handleChange}
        className="border border-gray-500 p-1 rounded-md"
      >
        <option value="">Select...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  )
}

export default HiveDropdown
