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
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20  bg-primary`}
    >
      <div className="w-flex items-center justify-between w-full max-w-7xl mx-auto">
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
          <p className="text-white text-[18px]">
            {" "}
            Peter Yelton
            <span className="sm:block hidden">
              Frontend Developer Full Stack Software Engineer
            </span>
          </p>
        </Link>
        
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)}/>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 gradient absolute top-20 bg-gradient-to-r from-cyan-500 to-blue-500 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

          <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                    console.log("clicked")
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a></li>
          ))}
        </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
