import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import css from '../styles/Header.module.css';
import { FaTimes, FaBars, FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickCategory = () => {
    setShowCategory(!showCategory);
  };

  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <div className={css.logoContainer}>
          <div className={css.logo}>
            <Link href='/'>EC</Link>
          </div>
        </div>

        <div className={`${css.navContainer}`}>
          <ul className={` ${!showMenu ? css.navItems : css.navItemsClose}`}>
            <Link href='/'>
              <li onClick={handleClickMenu} className={`${css.item}`}>
                Home
              </li>
            </Link>

            <div>
              <li onClick={handleClickCategory} className={`${css.item} `}>
                Category{' '}
                {showCategory ? (
                  <FaAngleUp className={css.icon} />
                ) : (
                  <FaAngleDown className={css.icon} />
                )}
              </li>
              <div className={showCategory ? css.category : css.categoryClose}>
                <li onClick={handleClickMenu} className={css.listType}>
                  <Image src='/css.png' alt='css' width='30px' height='30px' />{' '}
                  <Link href={`/category/css`}>CSS</Link>
                </li>
                <li onClick={handleClickMenu} className={css.listType}>
                  <Image
                    src='/html.png'
                    alt='html'
                    width='30px'
                    height='30px'
                  />{' '}
                  <Link href={`/category/html`}>HTML</Link>
                </li>
                <li onClick={handleClickMenu} className={css.listType}>
                  <Image
                    src='/js.png'
                    alt='javascript'
                    width='30px'
                    height='30px'
                  />{' '}
                  <Link href={`/category/javascript`}>JavaScript</Link>
                </li>
                <li onClick={handleClickMenu} className={css.listType}>
                  <Image
                    src='/nodejs.png'
                    alt='nodejs'
                    width='30px'
                    height='30px'
                  />
                  {'  '}
                  <Link href={`/category/nodejs`}>NodeJS</Link>
                </li>
                <li onClick={handleClickMenu} className={css.listType}>
                  <Image
                    src='/python.png'
                    alt='python'
                    width='30px'
                    height='30px'
                  />
                  {'  '}
                  <Link href={`/category/python`}>Python</Link>
                </li>
              </div>
            </div>

            <Link href='/create-account'>
              <li onClick={handleClickMenu} className={`${css.item}`}>
                Create Account
              </li>
            </Link>
          </ul>
        </div>

        <div onClick={handleClickMenu} className={css.buttonContainer}>
          {showMenu ? (
            <FaBars className={css.icons} />
          ) : (
            <FaTimes className={css.iconsTimes} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
