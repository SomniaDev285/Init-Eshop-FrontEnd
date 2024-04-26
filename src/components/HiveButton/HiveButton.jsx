import React from 'react'

const HiveButton = ({ type, label, btnIcon, onClick }) => {
  return (
    <div className="w-full h-full cursor-pointer">
      <button
        type={type ? type : ''}
        onClick={onClick}
        className={`bg-blue-500 hover:bg-blue-700 text-white w-full h-full font-bold py-2 px-4 rounded-full`}
      >
        {btnIcon ? (
          <div className="flex justify-between">
            <img
              src={btnIcon}
              className="w-6 h-6 img-white"
              alt="btn-icon"
            ></img>

            {label ? label : 'Button'}
          </div>
        ) : (
          <div>{label ? label : 'Button'}</div>
        )}
      </button>
    </div>
  )
}

export default HiveButton
