import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20  bg-primary`}
    >
      <div className="w-flex items-center justify-between w-full max-w-7xl mx-auto mb-70">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 object-contain mr-3"
          />
          <p
            id="nav-name"
            className="text-white text-[18px] font-bold cursor-pointer flex"
          >
            {" "}
            Peter Yelton
            <span id="nav-span" className="sm:block hidden">
              {" "}
              | Frontend Developer
            </span>
          </p>
        </Link>
        <ul
          id="nav-links-ul"
          className="list-none hidden sm:flex flex-row gap-10"
        >
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div id="" className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            id="nav-mobile-links"
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 gradient absolute top-20 bg-gradient-to-tr from-slate-700 via-slate-700 to-slate-900 right-0 mx-4 my-3 min-w-[140px] z-10 rounded-l`
          }style={{
            clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 10px 0)'
          }}
          >
            <div
              className="absolute top-0 left-0 w-6 h-6 bg-white transform -rotate-45"
              style={{ marginTop: "-15px", marginLeft: "-15px" }}
           />
            <div
              className="absolute bottom-0 left-0 w-6 h-6 bg-white transform rotate-45"
              style={{ marginBottom: "-15px", marginLeft: "-15px" }}
            />
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === link.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
