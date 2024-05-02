import React, { useEffect, useState } from 'react'

function HiveFormInput({
  type,
  label,
  name,
  placeholder,
  description,
  onChange,
  value,
  className
}) {
  const [val, setVal] = useState('')

  useEffect(() => {
    setVal(value)
  }, [value])

  const changeVal = (e) => {
    setVal(e.target.value)
    onChange(e.target.value)
  }

  return (
    <>
      <div className={`flex flex-col ${className}`}>
        <label className='text-sm' htmlFor="form-input">{label ? label : 'Input Label'}</label>
        <input
          id="form-input"
          value={val}
          name={name}
          type={type ? type : 'text'}
          placeholder={placeholder ? placeholder : 'Input'}
          className="border border-gray-500 rounded-md p-1"
          onChange={changeVal}
        />
        {description && (
          <span className="text-xs italic text-gray-500">{description}</span>
        )}
      </div>
    </>
  )
}

export default HiveFormInput
