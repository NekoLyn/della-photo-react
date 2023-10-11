import React from "react";
import "./sidebar.css";

function Sidebar(props) {
  // const handleCloseBtn = props.turnOffSidebar;
  //   console.log(props);
  const { turnOffSidebar: handleCloseBtn } = props;
  return (
    <>
      <button className="close-btn" onClick={handleCloseBtn}>
        <a className="close-sidebar" href="#">
          x
        </a>
      </button>

      <div className="sidebar-search">
        <h2>SEARCH</h2>
        <form className="search-form">
          <input type="search" placeholder="search:" />
          <button className="search-icon" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </form>
      </div>
      <div className="sidebar-about">
        <img src="#" alt="about-icon" />
        <h2>About the photofolio</h2>
        <p>content</p>
      </div>
      <div className="sidebar-subscribe">
        <h2>subscribe to our newsletter</h2>
        <p>
          If you want to receive monthly updates from us just pop your email in
          the box.
        </p>
        <form className="subscribe-form">
          <input type="text" placeholder="your email address" />
          <button type="submit"></button>
        </form>
      </div>
      <div className="sidebar-intagram">
        <h2>instagram gallery</h2>
        <ul className="ins-list">
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <img src="" alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
