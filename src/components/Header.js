import React from 'react';
import { Link } from 'gatsby';
import { Navbar } from 'react-bulma-components';
import * as styles from './Header.module.scss';

const Header = ({ navVisible, toggleNav }) => {
  return (
    <Navbar fixed>
      <Navbar.Brand>
        <Link to="/" className={`${styles.brandNavbarItem} navbar-item`}>
          <img src="/icon.png" alt="site icon" />
        </Link>
        <Navbar.Burger onClick={toggleNav} className={navVisible ? 'is-active' : ''} />
      </Navbar.Brand>
      <Navbar.Menu className={navVisible ? 'is-active' : ''}>
        <Navbar.Container align="left">
          <Link to="/" className="navbar-item">
            <span className="is-size-5">Home</span>
          </Link>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};

export default Header;
