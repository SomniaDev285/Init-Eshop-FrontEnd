import React from 'react'
import { AppSidebar } from '../../components'
import { sidebarData } from '../../mock'
import { useTranslation } from 'react-i18next'

const Warehouse = () => {
  const { t } = useTranslation()
  return (
    <>
      <AppSidebar sidebarData={sidebarData} />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-slate-300 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-200 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-200 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-200 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-200 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center rounded bg-gray-200 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Warehouse
