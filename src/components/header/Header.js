import React from 'react';
import {IndexLink,Link} from 'react-router';

const styles = require('./Header.css');

const Header = () => (
  <header className={styles.banner} role="banner">
    <div className={styles.logo}>
      <IndexLink className={styles.link} to="/">Home</IndexLink>
    </div>
    <Link className={styles.link} to="/sean">Sean Bean Deaths</Link>
  </header>
);

export default Header;
