import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import routes from '../router/routes';
import RouteWithSubRoutes from '../router/RouteWithSubRoutes';


class RootContainer extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="routes-container">
            <Switch>
              {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default RootContainer;
