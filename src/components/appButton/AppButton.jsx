import React from 'react'

const AppButton = ({ type, label, btnIcon }) => {
  return (
    <div className="w-full h-full cursor-pointer">
      <button
        type={type ? type : ''}
        className={`bg-blue-500 hover:bg-blue-700 text-white w-full h-full font-bold py-2 px-4 rounded-full`}
      >
        <div className="flex justify-between">
          {btnIcon && (
            <img
              src={btnIcon}
              className="w-6 h-6 img-white"
              alt="btn-icon"
            ></img>
          )}
          {label ? label : 'Button'}
        </div>
      </button>
    </div>
  )
}

export default AppButton
