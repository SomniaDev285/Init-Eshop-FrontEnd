import React from 'react'
import { AppSidebar } from '../../components'
import { sidebarData } from '../../mock'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='flex'>
            <AppSidebar sidebarData={sidebarData} />
            <div className="p-4">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard