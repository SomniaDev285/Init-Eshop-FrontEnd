import React, { useState } from 'react'

const AppButton = ({ type, label }) => {
  const [intensity, setIntensity] = useState(500)
  return (
    <div className="w-full h-full">
      <button type={type ? type : ''} className={[`bg-blue-${intensity}`, "hover:bg-blue-700 text-white w-full h-full font-bold py-2 px-4 rounded-full"]}>
        {label ? label : 'Button'}
      </button>
    </div>
  )
}

export default AppButton