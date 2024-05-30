import React, { useEffect, useRef, useState } from 'react';
import { barIcon, welcomeNext } from '../../assets/svg';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileManager = () => {
  const [profileSettings, setProfileSettings] = useState(false)
  const toggleProfileSettings = () => {
    setProfileSettings(!profileSettings)
  }
  return (
    <div className="absolute left-0 bottom-0 flex items-center sm:static sm:inset-auto sm:ml-3 ml-6 mb-3">
      <div className="relative">
        <div>
          <button type="button" onClick={toggleProfileSettings} className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Open user menu</span>
            <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </button>
        </div>
        <div className={`absolute collapsible ${profileSettings ? 'open' : ''} left-9 bottom-9 z-10 mb-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1`}>
          <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-300" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
          <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-300" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
          <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-300" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
        </div>
      </div>
    </div>
  )
}

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
          <ul className={`ml-3 collapsible ${isOpen ? 'open' : ''}`}>
            {item.children.map((child) => (
              <SidebarItem key={child.id} item={child} />
            ))}
          </ul>
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

  const handleOutsideClick = (e) => {
    if (outsideRef.current && !outsideRef.current.contains(e.target) && isMobile.current) {
      toggleSideBarRef.current.style.transform = 'translateX(-100%)';
      onSidebarToggle(false);
    }
  };

  useEffect(() => {
    isMobile.current = window.getComputedStyle(outsideRef.current.querySelector('.toggleBtn')).display !== 'none';
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);


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
        className="fixed left-0 top-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-slate-300 dark:bg-gray-800">
          <ul className="space-y-2 font-medium flex-1">
            {sidebarData.map((item) => (
              <SidebarItem key={item.id} item={item} />
            ))}
          </ul>
          <ProfileManager />
        </div>
      </aside>
    </div>
  );
};

export default HiveSidebar;
