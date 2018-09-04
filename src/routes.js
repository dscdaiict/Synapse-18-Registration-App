import App from './app/app';
import LoginPage from './app/components/LoginPage';
import DashboardPage from './app/components/DashboardPage'
import SignUpPage from './app/components/SignUpPage';
import Admin from './app/components/Admin';


const routes = {
  // base component (wrapper for the whole application).
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent:(location, callback) => {
        callback(null, LoginPage);
      }
    },
    {
      path: '/signup',
      getComponent: (location, callback) => {
        callback(null, SignUpPage);
      }
    },
    {
      path: '/dashboard',
      getComponent: (location, callback) => {
        callback(null, DashboardPage);
      }
    },
    {
      path: '/admin_event',
      getComponent: (location, callback) => {
        callback(null, Admin);
      }
    }
  ]
};

export default routes;
