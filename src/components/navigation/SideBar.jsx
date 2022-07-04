import React, { useState } from "react";
import useStore from "../../store/useStore";
import { HiOutlineFastForward } from "react-icons/hi";
import logo from "../../assets/images/logo.png";
import { GoHome } from "react-icons/go";
import useDarkmode from "../../hooks/useDarkmode";
import { NavLink } from "react-router-dom";
import {FaBalanceScale} from 'react-icons/fa'

function SideBar() {
  const open = useStore((state) => state.open);
  const toggleNav = useStore((state) => state.toggleNav);
  const [isDarkMode, toggleDarkMode] = useDarkmode();
  const [online, setOnline] = useState(true);

  let userAgent = navigator.userAgent;

  let browserName;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "edge";
  } else {
    browserName = "can't tell";
  }
  
  window.addEventListener("offline", () => {
    setOnline(false);
  });
  window.addEventListener("online", () => {
    setOnline(true);
  });

  return (
    <div
      className={`${
        open ? "w-60" : "w-20"
      } bg-white dark:bg-black-dark h-screen p-4  pt-6  relative duration-300 hidden sm:block`}
    >
      {/* icon  */}
      <HiOutlineFastForward
        className={`absolute cursor-pointer rotate-0 -right-3 top-6 w-8 h-8 dark:bg-black-dark dark:border-white dark:text-white  text-white bg-green-light
           text-text-white border-4 dark:border-2 rounded-full  ${
             open && "rotate-180"
           }`}
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
          className={`dark:text-white text-black-dark origin-left font-bold text-xl duration-200 uppercase ${
            !open && "scale-0"
          }`}
        >
          sosyfyed
        </h1>
      </div>

      <div>
        <ul className="pt-12 relative">
          {/* online indicator  */}
          <div className="absolute top-1 flex items-center">
            <span
              className={`block h-3 w-3 ${
                online ? "bg-green-dark" : "bg-red"
              }  rounded-full`}
            ></span>
            <p
              className={`${
                online ? "text-green-dark" : "text-red"
              } text-sm font-semibold ml-1`}
            >
              {online ? "online" : "offline"}
            </p>
          </div>
          {/* browser detector  */}
          <div className="absolute top-6">
            <p className={`text-black-dark dark:text-white-text ${ open ? "text-xs " : "text-[0.5rem] ml-2"}`}> { `${ open ? "You are browsing on" : "" } ${browserName} `} </p>
          </div>

          <li
            data-tip="Home"
            className={`${
              !open &&
              "justify-center tooltip hover:tooltip-open tooltip-right "
            }  group`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "navlink-active navlink py-1"
                  : "flex items-center gap-4 navlink py-1"
              }
            >
              <GoHome className={`${!open && "text-3xl"} text-xl `} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Home
              </span>
            </NavLink>
          </li>

          <div className="pt-2 w-full flex flex-col gap-1">
          <li
            data-tip="convertors"
            className={`${
              !open &&
              "justify-center tooltip hover:tooltip-open tooltip-right "
            }  group`}
          >
            <NavLink
              to="/convertors"
              className={({ isActive }) =>
                isActive
                  ? "navlink-active navlink py-1"
                  : "flex items-center gap-4 navlink py-1"
              }
            >
              <FaBalanceScale className={`${!open && "text-3xl"} text-xl `} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                convertors
              </span>
            </NavLink>
          </li>
          <li
            data-tip="codepen"
            className={`${
              !open &&
              "justify-center tooltip hover:tooltip-open tooltip-right "
            }  group`}
          >
            <NavLink
              to="/codepen"
              className={({ isActive }) =>
                isActive
                  ? "navlink-active navlink py-1"
                  : "flex items-center gap-4 navlink py-1"
              }
            >
              <FaBalanceScale className={`${!open && "text-3xl"} text-xl `} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                codepen
              </span>
            </NavLink>
          </li>
          </div>
        </ul>

      </div>
    </div>
  );
}

export default SideBar;
