import React, { useEffect, useRef, useState } from 'react'
import { barIcon, welcomeNext } from '../../assets/svg'
import { Link, useLocation } from 'react-router-dom'

const SidebarItem = ({ item }) => {
  const location = useLocation();
  // const isActive = item.link === location.pathname;
  const isActive = item.link === location.pathname || (item.children && item.children.some(child => child.link === location.pathname));
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen(!isOpen)
  const extendRef = useRef(null)
  useEffect(() => {
    if (item.children.length === 0) {
      return
    } else if (isOpen && item.children.length > 0) {
      extendRef.current.style = 'rotate: 90deg'
    } else {
      extendRef.current.style = 'rotate: 0deg'
    }
  }, [isOpen, setIsOpen])
  useEffect(() => {
    console.log('----------', item)
    if (isActive) {
      setIsOpen(true)
    }
  }, [])
  return (
    <>
      <li key={item.id}>
        {item.children.length > 0 && (
          <button
            onClick={handleToggle}
            type="button"
            className={`flex items-center w-full p-2 text-base transition duration-75 rounded-lg group text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}
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
              ref={extendRef}
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
          <li key={item.id}>
            <Link
              to={item.link}
              className={`flex items-center p-2 rounded-lg group text-gray-900 dark:text-white ${isActive ? 'bg-gray-300 dark:bg-gray-600' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
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
  );
};

const HiveSidebar = ({ sidebarData }) => {
  let isMobile = null
  const toggleSideBarRef = useRef(null)
  const outsideRef = useRef(null)
  const toggleSideBar = () => {
    toggleSideBarRef.current.style =
      'transform: translate(0, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
  }

  useEffect(() => {
    isMobile =
      window.getComputedStyle(outsideRef.current.querySelector('.toggleBtn'))
        .display !== 'none'
        ? true
        : false
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  })

  const handleOutsideClick = (e) => {
    if (
      outsideRef.current &&
      !outsideRef.current.contains(e.target) &&
      isMobile
    ) {
      toggleSideBarRef.current.style =
        'transform: translate(-100%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
    }
  }

  return (
    <div ref={outsideRef} className="w-64">
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        onClick={toggleSideBar}
        className="inline-flex toggleBtn left-0 items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <img src={barIcon} className="w-6 h-6" alt="bar icon"></img>
      </button>

      <aside
        ref={toggleSideBarRef}
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

export default HiveSidebar
