import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SidebarBtn from "./SidebarBtn";
import Navlist from "./Navlist";

function Header() {
  const [openSidbar, setOpenSidebar] = useState(false);
  function turnOnSidebar() {
    setOpenSidebar(true);
  }

  function turnOffSidebar() {
    setOpenSidebar(false);
  }

  return (
    <header>
      <div className="navbar">
        <div className="navbar-header">
          <div className="navbar-logo">
            <a href="./index.html" className="nav-logo">
              <img
                src="https://nunforest.com/photofolio/images/logo-black.png"
                alt=""
              />
            </a>
          </div>
          <div className="navbar-nav">
            <Navlist />
            <button onClick={turnOnSidebar}>
              <SidebarBtn />
            </button>
          </div>
        </div>
      </div>
      <div className={"right-sidebar " + (openSidbar && "right-sidebar-in")}>
        <Sidebar turnOffSidebar={turnOffSidebar} />
      </div>
    </header>
  );
}

export default Header;
