import React, { useEffect, useState } from 'react'

function HiveCombobox({ label, value, onSelectionChange, className, offlineData, labelKeyList, valueKey }) {
    // State to keep track of the current input and selected option
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState(value);
    const [showDropdown, setShowDropdown] = useState(false);

    // Handle input change
    const handleInputChange = (event) => {
        console.log(event)
        setInputValue(event.target.value);
        setShowDropdown(true);
        // onSelectionChange(event.target.value)
    };

    // Handle option selection
    const handleSelectOption = (option) => {
        setSelectedOption(option[valueKey]);
        setInputValue(option.dispLabel);
        setShowDropdown(false);
        onSelectionChange(option);
    };

    useEffect(() => {
        if (labelKeyList.length > 1) {
            offlineData.map((option) => {
                option.dispLabel = ''
                labelKeyList.map((label) => {
                    option.dispLabel = option.dispLabel.length > 0 ? option.dispLabel + ' - ' + option[label] : option[label]
                })
            })
        } else {
            offlineData.map((option) => {
                option.dispLabel = option[labelKeyList[0]]
            })
        }
    }, [labelKeyList])

    useEffect(() => {
        setSelectedOption(value);
        setInputValue(value);
    }, [value])

    return (
        <div className={`relative w-full ${className}`}>
            <label className='text-sm' htmlFor="form-input">{label ? label : 'Input Label'}</label>
            <div className="flex items-center border border-gray-500 rounded-md p-1">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="w-full p-1 focus:outline-none"
                    placeholder="Type or select an option"
                    onClick={() => setShowDropdown(true)}
                    onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
                />
                <svg
                    onClick={() => setShowDropdown(!showDropdown)}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-6 h-6 transform transition-transform duration-200 ${showDropdown ? 'rotate-180' : 'rotate-0'}`}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
            {showDropdown && (
                <ul className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white border border-gray-200 rounded-md shadow-lg max-h-60 focus:outline-none sm:text-sm">
                    {offlineData.filter(item => {
                        // Convert item to array of its string property values and check each one
                        return Object.values(item).some(value =>
                            typeof value === 'string' && value.toLowerCase().includes(inputValue.toLowerCase())
                        )
                    }).map((option) => (
                        <li
                            key={option[valueKey]}
                            onClick={() => handleSelectOption(option)}
                            className="py-2 px-4 cursor-pointer hover:bg-blue-500 hover:text-white"
                        >
                            {option.dispLabel}
                        </li>
                    ))
                    }
                </ul>
            )}
        </div>
    );
}

export default HiveCombobox