import React, { useEffect, useRef, useState } from 'react';
import { barIcon, welcomeNext } from '../../assets/svg';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarItem = ({ item }) => {
  const location = useLocation();
  const isActive = item.link === location.pathname || (item.children && item.children.some(child => child.link === location.pathname));
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const extendRef = useRef(null);

  useEffect(() => {
    if (item.children.length === 0) {
      return;
    } else if (isOpen && item.children.length > 0) {
      extendRef.current.style.transform = 'rotate(90deg)';
    } else {
      extendRef.current.style.transform = 'rotate(0deg)';
    }
  }, [isOpen, setIsOpen, item.children.length]);

  useEffect(() => {
    if (isActive) {
      setIsOpen(true);
    }
  }, [isActive]);

  return (
    <li key={item.id}>
      {item.children.length > 0 ? (
        <>
          <button
            onClick={handleToggle}
            type="button"
            className={`flex items-center w-full p-2 text-base transition duration-75 rounded-lg group text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
          >
            {item.iconName.length > 0 && (
              <FontAwesomeIcon icon={['fas', item.iconName]} />
            )}
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
          {isOpen && (
            <ul className="ml-3">
              {item.children.map((child) => (
                <SidebarItem key={child.id} item={child} />
              ))}
            </ul>
          )}
        </>
      ) : (
        <Link
          to={item.link}
          className={`flex items-center p-2 rounded-lg group text-gray-900 dark:text-white ${isActive ? 'bg-gray-300 dark:bg-gray-600' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
        >
          {item.iconName.length > 0 && (
            <FontAwesomeIcon icon={['fas', item.iconName]} />
          )}
          <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
            {item.name}
          </span>
          {item.tag.length > 0 && (
            <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
              {item.tag}
            </span>
          )}
        </Link>
      )}
    </li>
  );
};

const HiveSidebar = ({ sidebarData, onSidebarToggle }) => {
  const isMobile = useRef(window.innerWidth <= 640);
  const toggleSideBarRef = useRef(null);
  const outsideRef = useRef(null);

  const toggleSideBar = () => {
    toggleSideBarRef.current.style.transform = 'translateX(0)';
    onSidebarToggle(true);
  };

  useEffect(() => {
    isMobile.current = window.getComputedStyle(outsideRef.current.querySelector('.toggleBtn')).display !== 'none';
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (outsideRef.current && !outsideRef.current.contains(e.target) && isMobile.current) {
      toggleSideBarRef.current.style.transform = 'translateX(-100%)';
      onSidebarToggle(false);
    }
  };

  return (
    <div ref={outsideRef}>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        onClick={toggleSideBar}
        className="fixed z-39 inline-flex toggleBtn left-0 top-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <img src={barIcon} className="w-6 h-6" alt="bar icon" />
      </button>

      <aside
        ref={toggleSideBarRef}
        id="sidebar-multi-level-sidebar"
        className="fixed w-[17.5rem] left-0 top-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-slate-300 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {sidebarData.map((item) => (
              <SidebarItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default HiveSidebar;
