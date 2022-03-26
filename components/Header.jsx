import Link from "next/link";
import React, { useState } from "react";
import { MenuList as menu } from "./MenuList";
import { FaTimes, FaBars } from "react-icons/fa";
import css from "../styles/Home.module.css";


const Header = () =>{
  return(
    <div className='container'>
      <nav>
        <div className='logoContainer'></div>
        <div className='list'>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </div>
        <div className='btn'></div>
      </nav>
    </div>
  )
}

export default Header;

// const Header = () => {
//   const [clicked, setClicked] = useState(false);

//   const handleClick = () => {
//     setClicked(!clicked);
//   };
//   console.log(menu);
//   return (
//     <div className={css.header}>
//       <div className={css.logoContainer}>
//         <Link href={menu[0].url}>
//           <span className={css.textLogo}>CharInfo</span>
//         </Link>
//       </div>

//       <div className={css.navList}>
//         <ul className={`${css.listItems} ${!clicked ? css.display : ""}`}>
//           {menu.map((item, index) => (
//             <Link key={index} href={item.url}>
//               <span onClick={handleClick} className={`${css.navItems}`}>
//                 {item.title}
//               </span>
//             </Link>
//           ))}
//         </ul>
//       </div>

//       <div onClick={handleClick} className={css.btn}>
//         <span>
//           {clicked ? (
//             <FaTimes className="times" />
//           ) : (
//             <FaBars className="bars" />
//           )}
//         </span>
//       </div>
//     </div>
//   );
// };