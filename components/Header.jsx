import Link from "next/link";
import React, { useState } from "react";
import { MenuList as menu } from "./MenuList";
import { FaTimes, FaBars } from "react-icons";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  console.log(menu);
  return (
    <div className="flex justify-between bg-black text-white px-5 h-10 w-full ">
      <div id="logo__container" className="py-2 m-1">
        <Link href={menu[0].url}>
          <span className="mx-5 hover:cursor-pointer m-1 rounded-lg border-l-2 border-r-2   ">
            CharInfo
          </span>
        </Link>
      </div>

      <div id="menuList__container">
        <ul className="flex justify-around w-full ">
          {menu.map((item, index) => (
            <Link key={index} href={item.url}>
              <span className="mx-5 hover:cursor-pointer p-1 m-1 rounded-lg hover:bg-white hover:text-black ease-in-out duration-500 md:gr">
                {item.title}
              </span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
