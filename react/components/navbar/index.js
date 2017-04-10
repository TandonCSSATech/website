import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import { styles } from '../../styles/app.style';
import longLogo from '../../../public/logos/long_logo.png';
import shortLogo from '../../../public/logos/dark_large.png';
import Navs from './navs';

const Navbar = ({ items, width, initialActiveNav }) => (
  <AppBar
    style={styles.navbar.container}
    title={<img style={styles.navbar.logo} src={width > 500 ? longLogo : shortLogo} />}
    titleStyle={styles.navbar.title}
    showMenuIconButton={false}>
    <Navs initialActiveNav={initialActiveNav} items={items} />
  </AppBar>
)

export default Navbar;