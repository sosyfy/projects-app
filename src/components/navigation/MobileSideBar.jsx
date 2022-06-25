import React from 'react'
import logo from '../../assets/images/logo.png'
import useDarkmode from '../../hooks/useDarkmode'
import useStore from '../../store/useStore'
import {NavLink } from 'react-router-dom'
import { GoHome } from "react-icons/go";



function MobileSideBar() {
  const isOpen = useStore((state)=> state.isOpen)
  const toggleMobile = useStore((state )=> state.toggleMobile)

  const [isDarkMode , toggleDarkMode ] = useDarkmode()


console.log(isOpen);
  return (
    <div className='sm:hidden z-30 sticky w-screen mtp'>
        <div className="flex justify-between items-center px-4 py-2 bg-gray-light dark:bg-black-dark shadow-sm relative">
            <div className='cursor-pointer dark:text-white-text' onClick={()=> toggleMobile()} >
                <span>+++</span>
            </div>
            <div >
                <h2 className='uppercase font-bold dark:text-white-text'>sosyfyed</h2>
            </div>
            <div className='' onClick={() => toggleDarkMode()} >
              <img src={logo} alt="" className='h-6 rounded-full' />
            </div>
        </div>
            <ul className={` ${isOpen ? "-left-60" : "left-0"} fixed h-screen bg-gray-dark dark:bg-black-light w-60  top-0 bottom-0 overflow-auto px-4  pt-12 mtp  duration-500 transition-all -z-10`}>
            <li
            data-tip="Home"
            className={`group`}
          >
            <NavLink to='/'  className={({ isActive }) =>
              !isActive ? "" : "flex gap-x-4 items-center  bg-white py-1 px-3 rounded-sm text-black-light font-semibold dark:bg-black-dark"
            } >
            <GoHome className={` text-xl `} />
            <span className={` origin-left duration-200`}>
              Home
            </span>
            </NavLink>
          </li>
            </ul>
            <div className={` ${isOpen ? "hidden opacity-0" : ""}  fixed h-screen w-screen -z-20 bg-black-light opacity-5 duration-500 transition-all`} onClick={()=> toggleMobile()}></div>
     </div>

    
  )
}

export default MobileSideBar