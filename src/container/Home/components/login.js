import React, { Component } from 'react';
import RouteWithSubRoutes from '../../../router/RouteWithSubRoutes';

class Login extends Component {
  render() {
    console.log(this.props.routes);
    return ( 
      <div>
          <div className="col-sm-5 m-t-xxl max-wd-450">
            Login Screen
          </div>
          {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    )
  }
}


export default Login;
