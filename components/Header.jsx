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
    <div>
      <div>
        <Link href={menu[0].url}>
          <span>CharInfo</span>
        </Link>
      </div>

      <div i>
        <ul>
          {menu.map((item, index) => (
            <Link key={index} href={item.url}>
              <span>{item.title}</span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
