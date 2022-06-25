import React from "react";
import useStore from "../../store/useStore";
import MobileSideBar from "./MobileSideBar";
import SideBar from "./SideBar";

function Navbar() {
  const open = useStore((state) => state.open);
  return (
    <aside className={`fixed`}>
      <MobileSideBar />
      <SideBar />
    </aside>
  );
}

export default Navbar;
