import React from 'react'
import { HiveNavbar, HiveSidebar } from '../../components'
import { sidebarData } from '../../mock'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      {/* <HiveNavbar /> */}
      <div className="flex pl-4">
        {/* <div> */}
        <HiveSidebar sidebarData={sidebarData} />
        {/* </div> */}
        <div className="p-4 container">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Dashboard
