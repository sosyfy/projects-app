import React from "react";
import useStore from "../../store/useStore";
import { HiOutlineFastForward } from "react-icons/hi";
import logo from "../../assets/images/logo.png";
import { GoHome } from "react-icons/go";
import useDarkmode from "../../hooks/useDarkmode";
import {NavLink} from 'react-router-dom'

function SideBar() {
  const open = useStore((state) => state.open);
  const toggleNav = useStore((state) => state.toggleNav);
  const [isDarkMode, toggleDarkMode] = useDarkmode();

  return (
    <div
      className={`${
        open ? "w-60" : "w-20"
      } bg-gray-dark dark:bg-black-dark h-screen p-4  pt-6  relative duration-300 hidden sm:block`}
    >
      {/* icon  */}
      <HiOutlineFastForward
        className={`absolute cursor-pointer rotate-180 -right-3 top-6 w-8 h-8 dark:bg-black-dark dark:border-white dark:text-white  text-white bg-green-light
           text-text-white border-4 rounded-full  ${!open && "rotate-0"}`}
        onClick={toggleNav}
      />
      {/* top nav  */}

      <div className="flex gap-x-4 items-center">
        <img
          onClick={() => toggleDarkMode()}
          src={logo}
          className={`cursor-pointer duration-500 h-8 rounded-full ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-bold text-xl duration-200 uppercase ${
            !open && "scale-0"
          }`}
        >
          sosyfyed
        </h1>
      </div>

      <div>
        <ul className="pt-8">
          <li
            data-tip="Home"
            className={`${
              !open &&
              "justify-center tooltip hover:tooltip-open tooltip-right "
            }  group`}
          >
            <NavLink to='/'  className={({ isActive }) =>
              isActive ? "navlink-active navlink" : "flex items-center gap-4 navlink"
            } >
            <GoHome className={`${!open && "text-3xl"} text-xl `} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Home
            </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
