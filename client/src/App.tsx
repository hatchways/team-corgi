import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import LandingPage from './pages/LandingPage/LandingPage';
import Dashboard from './pages/Dashboard/Dashboard';
import SitterProfile from './pages/SitterProfile/SitterProfile';
import ManageBookings from './components/ManageBookings/ManageBookings';

import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';

import './App.css';
import ManageProfile from './pages/ManageProfile/ManageProfile';
import Header from './components/DashboardCoponent/Header';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <Header />
              <Switch>
                <Route exact path="/landingpage" component={LandingPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={SitterProfile} />
                <ProtectedRoutes path="/manage-profile" component={ManageProfile} />
                <ProtectedRoutes path="/manage-bookings" component={ManageBookings} />
                <ProtectedRoutes exact path="/book-sitter" component={SitterProfile} />
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="*">
                  <Redirect to="/login" />
                </Route>
              </Switch>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
