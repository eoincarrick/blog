import Link from "next/link";
import React, { useState } from "react";
import { MenuList as menu } from "./MenuList";
import { FaTimes, FaBars } from "react-icons";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="flex justify-center justify-between bg-black text-white px-5 w-full">
      <div id="logo__container">CharInfo</div>

      <div id="menuList__container">
        <ul className="flex justify-around">
          {menu.map((item, index) => (
            <Link className="mx-8" href={item.url}>
              {item.title}
            </Link>
          ))}
        </ul>
      </div>

      <div onClick={handleClick}>
        <span>{clicked ? <FaTimes /> : <FaBars />}</span>
      </div>
    </div>
  );
};

export default Header;
