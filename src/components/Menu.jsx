import React from "react";
import { FcMenu } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Menu = () => {
  const [switchmenu, setSwitchmenu] = useState(false);
  const handleMenu = () => {
    setSwitchmenu(!switchmenu);
    console.log(switchmenu);
  };
  return (
    <>
      <FcMenu class=" w-7 h-7 fixed top-4 right-7" onClick={handleMenu} />

      <div
        className={` h-screen fixed top-0 right-0  overflow-hidden bg-white transition-all duration-300 ${
          switchmenu ? "w-[20vw]" : "w-0"
        } `}
      >
        {switchmenu && (
          <IoMdClose
            onClick={handleMenu}
            className={`w-7 h-7 fixed top-2 right-5`}
          />
        )}

        <div className="flex flex-col w-[500px] justify-center items-start mt-8 p-5">
          <ul className="space-y-6 text-lg font-medium text-gray-800">
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              About
            </li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Skills
            </li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Projects
            </li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
