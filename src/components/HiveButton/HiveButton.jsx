import React from 'react';

const colorClasses = {
  green: 'bg-green-600 hover:bg-green-700',
  blue: 'bg-blue-600 hover:bg-blue-700',
  red: 'bg-red-600 hover:bg-red-700',
  gray: 'bg-gray-600 hover:bg-gray-700'
  // Add more colors as needed
};

const HiveButton = ({ type = 'button', label = 'Button', btnIcon, onClick, bgColor }) => {
  const bgClass = colorClasses[bgColor] || colorClasses.gray; // Default to green if bgColor is not found

  return (
    <div className="w-full h-full cursor-pointer">
      <button
        type={type}
        onClick={onClick}
        className={`text-white w-full h-full font-bold py-2 px-4 rounded-full ${bgClass}`}
      >
        {btnIcon ? (
          <div className="flex justify-between items-center">
            <img
              src={btnIcon}
              className="w-6 h-6 img-white"
              alt="btn-icon"
            />
            {label}
          </div>
        ) : (
          <div>{label}</div>
        )}
      </button>
    </div>
  );
};

export default HiveButton;
