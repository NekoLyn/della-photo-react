import React from "react";

function Navlist() {
  return (
    <ul className="navbar-navlist">
      <li>
        <a href="#">
          <span>home</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span>work</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="currentColor"
            className="dropdown-arrow"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </a>

        <div className="drop-down">
          <h2>Work category</h2>
          <ul>
            <li>
              <a href="#">
                <span>people</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>nature</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>city</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>food</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>object</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#">
          <span>Blog</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="currentColor"
            className="dropdown-arrow"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </a>
        <div className="drop-down">
          <h2>Blog</h2>
          <ul>
            <li>
              <a href="#">
                <span>year 2020</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>year 2021</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>year 2022</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>year 2023</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#">
          <span>contact</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="currentColor"
            className="dropdown-arrow"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </a>
        <div className="drop-down">
          <h2>Contact</h2>
          <ul>
            <li>
              <a href="#">
                <span>About della</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>contact me</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
}

export default Navlist;
