import React, { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <nav className="w-full flex py-6 jusitfy-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px]  ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } ${
              active === nav.title
                ? "text-white"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => {
              setActive(nav.title);
            }}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={menuToggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setMenuToggle((prev) => !prev)}
        />

        <div
          className={`${
            menuToggle ? "flex" : "hidden"
          } absolute top-20 right-0 bg-black-gradient min-w-[140px] p-6 rounded-xl mx-4 my-2`}
        >
          <ul className="list-none justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } ${active === nav.title ? "text-white" : "text-gray-300"}`}
                onClick={() => {
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
