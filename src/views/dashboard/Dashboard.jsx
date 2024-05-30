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
      <div className={`${isSidebarVisible ? 'xl:w-1/6 lg:w-1/4 md:w-2/6' : 'w-0'} transition-width duration-300`}>
        <HiveSidebar sidebarData={sidebarData} onSidebarToggle={handleSidebarToggle} />
      </div>
      <div className={`p-4 2xl:me-8 md:me-2 md:mt-0 mt-4 container ${isSidebarVisible ? 'xl:w-5/6 lg:w-3/4 md:w-4/6' : 'w-full'} transition-width duration-300`}>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
