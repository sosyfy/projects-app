import React from 'react'
import logo from '../../assets/images/logo.png'
import useDarkmode from '../../hooks/useDarkmode'
import useStore from '../../store/useStore'
import {NavLink } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import {CgMenuLeft} from 'react-icons/cg'
import {GiCrossMark } from 'react-icons/gi'
import {FaBalanceScale} from 'react-icons/fa'




function MobileSideBar() {
  const isOpen = useStore((state)=> state.isOpen)
  const toggleMobile = useStore((state )=> state.toggleMobile)

  const [isDarkMode , toggleDarkMode ] = useDarkmode()

  return (
    <div className='sm:hidden z-100 sticky w-screen mtp'>
        <div className="flex justify-between items-center px-4 py-2 bg-gray-light dark:bg-black shadow relative">
            <div className='cursor-pointer dark:text-white-text text-black text-lg' onClick={()=> toggleMobile()} >
             {isOpen ? <CgMenuLeft className='text-2xl'/> : <GiCrossMark /> }
            </div>
            <div >
                <h2 className='uppercase font-bold dark:text-white-text text-green-light select-none'>sosyfyed</h2>
            </div>
            <div className='' onClick={() => toggleDarkMode()} >
              <img src={logo} alt="" className='h-6 rounded-full' />
            </div>
        </div>
            <ul className={` ${isOpen ? "-left-60" : "left-0"} fixed h-screen bg-white dark:bg-dark-secondary w-60  top-0 bottom-0 overflow-auto px-4  pt-12 mtp  duration-500 transition-all -z-10`}>
            <li
            data-tip="Home"
            className={`group`}
          >
            <NavLink to='/'  className={({ isActive }) =>
              isActive ? "navmobile-active" : "navmobile"
            } >
            <GoHome className={` text-xl `} />
            <span className={` origin-left duration-200`}>
              Home
            </span>
            </NavLink>
          </li>
            <li
            data-tip="Home"
            className={`group`}
          >
            <NavLink to='/convertors'  className={({ isActive }) =>
              isActive ? "navmobile-active" : "navmobile"
            } >
            <FaBalanceScale className={` text-xl `} />
            <span className={` origin-left duration-200`}>
              Convertors
            </span>
            </NavLink>
           </li>
            {/* <li
            data-tip="Home"
            className={`group`}
          >
            <NavLink to='/codepen'  className={({ isActive }) =>
              isActive ? "navmobile-active" : "navmobile"
            } >
            <FaBalanceScale className={` text-xl `} />
            <span className={` origin-left duration-200`}>
              Codepen
            </span>
            </NavLink>
           </li> */}
            </ul>
            <div className={` ${isOpen ? "hidden opacity-0" : ""}  fixed h-screen w-screen -z-20 bg-black-light opacity-5 duration-500 transition-all`} onClick={()=> toggleMobile()}></div>
     </div>

    
  )
}

export default MobileSideBar