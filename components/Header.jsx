import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import css from '../styles/Header.module.css';
import { FaTimes, FaBars } from 'react-icons/fa';

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <div className={css.logoContainer}>
          <div className={css.logo}>
            <Link href='/'>EC</Link>
          </div>
        </div>

        <div className={css.navContainer}>
          <ul className={css.navItems}>
            <Link href='/'>
              <li onClick={handleClick} className={`${css.item}`}>
                Home
              </li>
            </Link>
            <Link href='/#'>
              <div>
                <li onClick={handleClick} className={`${css.item} `}>
                  Categories
                </li>
                <div className={clicked ? css.category : css.categoryClose}>
                  <li onClick={handleClick} className={css.listType}>
                    <Image
                      src='/css.png'
                      alt='css'
                      width='30px'
                      height='30px'
                    />{' '}
                    CSS
                  </li>
                  <li onClick={handleClick} className={css.listType}>
                    <Image
                      src='/html.png'
                      alt='html'
                      width='30px'
                      height='30px'
                    />{' '}
                    HTML
                  </li>
                  <li onClick={handleClick} className={css.listType}>
                    <Image
                      src='/js.png'
                      alt='javascript'
                      width='30px'
                      height='30px'
                    />{' '}
                    JavaScript
                  </li>
                  <li onClick={handleClick} className={css.listType}>
                    <Image
                      src='/nodejs.png'
                      alt='nodejs'
                      width='30px'
                      height='30px'
                    />
                    {'  '}
                    NodeJS
                  </li>
                  <li onClick={handleClick} className={css.listType}>
                    <Image
                      src='/python.png'
                      alt='python'
                      width='30px'
                      height='30px'
                    />
                    {'  '}
                    Python
                  </li>
                </div>
              </div>
            </Link>
            <Link href='/create-account'>
              <li className={`${css.item}`}>Create Account</li>
            </Link>
          </ul>
        </div>

        <div onClick={handleClick} className={css.buttonContainer}>
          {clicked ? (
            <FaTimes className={css.icons} />
          ) : (
            <FaBars className={css.icons} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
