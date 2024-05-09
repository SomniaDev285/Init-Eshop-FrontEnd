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
      <div className="p-4 container">
        <Outlet />
      </div>
      <div className='bg-slate-500'>
        <h1>Welcome to the Admin Panel Dashboard</h1>
      </div>
    </div>
  )
}

export default Dashboard
