import React from 'react'
import { HiveSidebar } from '../../components'
import { sidebarData } from '../../mock'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="flex">
      <div>
        <HiveSidebar sidebarData={sidebarData} />
      </div>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
