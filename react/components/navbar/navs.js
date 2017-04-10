import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

import { styles } from '../../styles/app.style';

class Navs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: props.initialActiveNav
    }
  }

  _handleClick(path) {
    this.setState({ activePath: path });
  }

  render() {
    return (
      <div style={styles.navbar.navs.container}>
        <IndexLink to={"/"}>
          <FlatButton
            style={this.state.activePath === "home" ? styles.navbar.navs.button.active : styles.navbar.navs.button}
            labelStyle={styles.navbar.navs.button.label}
            onTouchTap={() => this._handleClick("home")}>
            主页
          </FlatButton>
        </IndexLink>
        {this.props.items.map((item, i) =>
          <Link key={i} to={item.path}>
            <FlatButton
              style={this.state.activePath === item.path ? styles.navbar.navs.button.active : styles.navbar.navs.button}
              labelStyle={styles.navbar.navs.button.label}
              onTouchTap={() => this._handleClick(item.path)}>
              {item.display}
            </FlatButton>
          </Link>
        )}
      </div>
    );
  }
}

export default Navs;