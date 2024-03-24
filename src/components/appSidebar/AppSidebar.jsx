import React, { useEffect, useRef, useState } from 'react'
import { barIcon, welcomeNext } from '../../assets/svg'
import { Link } from 'react-router-dom'
import './AppSidebar.css'

const SidebarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen(!isOpen)
  const ref = useRef(null)
  useEffect(() => {
    if (item.children.length === 0) {
      return
    } else if (isOpen && item.children.length > 0) {
      ref.current.style = 'rotate: 90deg'
    } else {
      ref.current.style = 'rotate: 0deg'
    }
  }, [isOpen, setIsOpen])
  return (
    <>
      <li key={item.id}>
        {item.children.length > 0 && (
          <button
            onClick={handleToggle}
            type="button"
            className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
          >
            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
              {item.name}
            </span>
            {item.tag.length > 0 && (
              <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                {item.tag}
              </span>
            )}
            <img
              ref={ref}
              src={welcomeNext}
              alt=""
              className="w-6 h-6 dark:img-white"
            />
          </button>
        )}
        {isOpen && item.children.length > 0 && (
          <ul className="ml-3">
            {item.children.map((child) => (
              <SidebarItem key={child.id} item={child} />
            ))}
          </ul>
        )}
        {item.children.length === 0 && (
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                {item.name}
              </span>
              {item.tag.length > 0 && (
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  {item.tag}
                </span>
              )}
            </Link>
          </li>
        )}
      </li>
    </>
  )
}

const AppSidebar = ({ sidebarData }) => {
  return (
    <div>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex left-0 items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <img src={barIcon} className="w-6 h-6" alt=""></img>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-slate-300 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {sidebarData.map((item, index) => (
              <SidebarItem item={item} />
            ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default AppSidebar
