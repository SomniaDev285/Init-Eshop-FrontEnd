import React, { useState } from 'react'
import { HiveSidebar } from '../../components'
import { sidebarData } from '../../mock'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleSidebarToggle = (isVisible) => {
    console.log(isVisible)
    setIsSidebarVisible(isVisible);
  };

  return (
    <div className="flex">
      <div className={`${isSidebarVisible ? 'md:w-1/6' : 'w-0'} transition-width duration-300`}>
        <HiveSidebar sidebarData={sidebarData} onSidebarToggle={handleSidebarToggle} />
      </div>
      <div className={`p-4 md:me-2 md:mt-0 mt-4 container ${isSidebarVisible ? 'md:w-5/6' : 'w-full'} transition-width duration-300`}>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
