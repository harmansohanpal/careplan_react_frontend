import Home from '../container/Home';
import Login from '../container/Home/components/login';
import ResetPassword from '../container/Home/components/reset-password';

const routes = [{
    path: "/",
    exact: true,
    component: Home
  }, {
      path: "/login",
      component: Login,
      routes: [{
          path: "/login/reset-password",
          component: ResetPassword
      }]
  }

];

export default routes;
