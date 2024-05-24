import React, { useEffect, useState } from 'react'

const HiveFormInput = React.forwardRef(({
  type,
  label,
  name,
  placeholder,
  description,
  onChange,
  value,
  error,
  className,
}, ref) => {
  const [val, setVal] = useState('')

  useEffect(() => {
    setVal(value)
  }, [value])

  const changeVal = (e) => {
    setVal(e.target.value)
    onChange(e)
  }

  return (
    <>
      <div className={`${className}`}>
        <label className='text-sm' htmlFor={name}>{label ? label : 'Input Label'}</label>
        <div className="flex flex-col">
          <input
            id={name}
            value={val}
            name={name}
            type={type ? type : 'text'}
            placeholder={placeholder ? placeholder : 'Input'}
            className={`border ${error ? 'border-red-500' : 'border-gray-500'} rounded-md p-2`}
            onChange={changeVal}
            ref={ref}
          />
          {error && <span className="text-red-500 text-sm">{error.message}</span>}
        </div>
        {description && (
          <span className="text-xs italic text-gray-500">{description}</span>
        )}
      </div>
    </>
  )
})

export default HiveFormInput
