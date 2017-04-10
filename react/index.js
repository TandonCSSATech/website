import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import App from './containers/app';
import Home from './containers/home';
import AboutUs from './containers/aboutus';
import Articles from './containers/articles';

injectTapEventPlugin();

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='/aboutus' component={AboutUs} />
      <Route path='/articles' component={Articles} />
    </Route>
  </Router>, document.getElementById('app'));