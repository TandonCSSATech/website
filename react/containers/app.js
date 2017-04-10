import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

import { styles } from '../styles/app.style';

import Navbar from '../components/navbar/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
    window.addEventListener('resize', this._handleResize.bind(this));
  }

  _handleResize() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const navItems = [{
      label: "aboutus",
      display: "关于我们",
      path: "/aboutus"
    }, {
      label: "articles",
      display: "所有文章",
      path: "/articles"
    }];
    return (
      <MuiThemeProvider>
        <div>
          <Navbar initialActiveNav={this.props.location.pathname} width={this.state.width} items={navItems} style={styles.nav} />
          <div style={styles.container}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;