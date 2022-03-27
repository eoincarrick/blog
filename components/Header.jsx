import React from 'react';
import Link from 'next/link';
import css from '../styles/Header.module.css';
import { Items } from './Items';

const Header = () => {
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <div className={css.logoContainer}>
          <div className={css.logo}>EC</div>
        </div>

        <div className={css.navContainer}>
          <ul className={css.navItems}>
            {Items.map((item, index) => (
              <Link key={index} href={item.url}>
                <li className={css.item}>{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
