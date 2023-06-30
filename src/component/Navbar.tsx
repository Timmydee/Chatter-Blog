import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import styles from "../Style";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="">
      <div className={`${styles.innerWidth} ${styles.xPaddings}`}>
        <div className="flex justify-between items-center relative">
          <h2 className={` ${styles.h2Style} text-blue-600`}>CHATTER</h2>

          <div onClick={handleMenu} className="lg:hidden">
            {!menu ? <BiMenuAltLeft /> : <IoMdClose />}

            {menu && (
              <div className="absolute bg-green-300 w-[70%] h-[40vh] p-4 right-0 rounded-2xl mx-auto flex justify-center items-center">
                <ul className="gap-10 text-blue-500 font-medium text-lg space-y-2">
                  <li className="cursor-pointer px-2">
                    <Link to="profile">Profile</Link>
                  </li>
                  <li className="cursor-pointer px-2 ">
                    <Link to="write">Write</Link>
                  </li>
                  <li className="cursor-pointer px-2">
                    <Link to="signin">Sign In</Link>
                  </li>
                  <li
                    className={` ${styles.flexCenter} rounded-2xl cursor-pointer px-2 py-2  border border-[#543EE0] text-black`}
                  >
                    <Link to="signin">Log In</Link>
                  </li>
                  <li
                    className={` ${styles.flexCenter} rounded-2xl cursor-pointer px-2 py-2 border bg-[#543EE0] text-white`}
                  >
                    <Link to="signin">Sign Up</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <ul className="lg:flex gap-5 text-black font-medium text-[16px] hidden">
            <li className="cursor-pointer ">
              <Link to="profile">Home</Link>
            </li>
            <li className="cursor-pointer ">
              <Link to="write">About Us</Link>
            </li>
            <li className="cursor-pointer ">
              <Link to="/signin">Contact</Link>
            </li>
            <li className="cursor-pointer ">
              <Link to="/feedscreen">Blog</Link>
            </li>
          </ul>

          <ul className="lg:flex gap-5 text-blue-500 font-medium text-[18px] hidden">
            <li
              className={` ${styles.flexCenter} rounded-2xl cursor-pointer px-2 py-3 w-[157px] border border-[#543EE0] text-black`}
            >
              <Link to="sign">Log In</Link>
            </li>
            <li
              className={` ${styles.flexCenter} rounded-2xl cursor-pointer px-2 py-3 w-[157px] border bg-[#543EE0] text-white`}
            >
              <Link to="signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
