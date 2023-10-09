import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './navbar.module.scss';
import { faGlobe, faCircleXmark, faBraille } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Navbar() {
  const [active, setActive] = useState(['navBar']);
  const showNav = () => {
    setActive(['navBar', 'active']);
  };
  const hideNav = () => {
    setActive(['navBar']);
  };
  return (
    <section className={cx('navBarSection')}>
      <header className={cx('header', 'flex')}>
        {/*Tách riêng 2 class để, không ngăn bằng dấu phẩy thì sẽ thành tên 1 class */}
        <div className={cx('logoDiv')}>
          <a href="#" className={cx('logo', 'flex')}>
            <FontAwesomeIcon icon={faGlobe} className={cx('logo-icon', 'icon')} />
            <h1>Travel.</h1>
          </a>
        </div>
        <div className={cx(...active)}>
          <ul className={cx('navLists', 'flex')}>
            <li className={cx('navItem')}>
              <a href="#" className={cx('navLink')}>
                Home
              </a>
            </li>
            <li className={cx('navItem')}>
              <a href="#" className={cx('navLink')}>
                Packages
              </a>
            </li>
            <li className={cx('navItem')}>
              <a href="#" className={cx('navLink')}>
                Shop
              </a>
            </li>
            <li className={cx('navItem')}>
              <a href="#" className={cx('navLink')}>
                About
              </a>
            </li>
            <li className={cx('navItem')}>
              <a href="#" className={cx('navLink')}>
                Pages
              </a>
            </li>
            <li className={cx('navItem')}>
              <a href="#" className={cx('navLink')}>
                New
              </a>
            </li>
            <li className={cx('navItem')}>
              <a href="#" className={cx('navLink')}>
                Contact
              </a>
            </li>
            <button className={cx('navListsBtn', 'btn')}>
              <a href="#">BOOK NOW</a>
            </button>
          </ul>

          <div onClick={hideNav} className={cx('closeNavBar')}>
            <FontAwesomeIcon icon={faCircleXmark} className={'icon'} />
          </div>
        </div>
        <div onClick={showNav} className={cx('toggleNavBar')}>
          <FontAwesomeIcon icon={faBraille} className={cx('toggleNavBarIcon', 'icon')} />
        </div>
      </header>
    </section>
  );
}

export default Navbar;
