import React, { useEffect, useRef, useState } from 'react'
import { HiveNavbar, HiveSidebar } from '../../components'
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
      <div className={`${isSidebarVisible ? 'w-1/3' : 'w-0'} transition-width duration-300`}>
        <HiveSidebar sidebarData={sidebarData} onSidebarToggle={handleSidebarToggle} />
      </div>
      <div className={`p-4 container bg-slate-600 ${isSidebarVisible ? 'w-2/3' : 'w-full'} transition-width duration-300`}>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
