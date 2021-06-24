import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import LandingPage from './pages/LandingPage/LandingPage';
import Dashboard from './pages/Dashboard/Dashboard';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';

import './App.css';
import EditProfile from './components/EditProfile/EditProfile';
import ProfilePhoto from './components/ProfilePhoto/ProfilePhoto';
import Payment from './components/Payment/Payment';
import Availability from './components/Availability/Availability';
import Security from './components/Security/Security';
import Settings from './components/Settings/Settings';
import ManageBookings from './components/ManageBookings/ManageBookings';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <Switch>
                <Route exact path="/landingpage" component={LandingPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/editprofile" component={EditProfile}></Route>
                <Route exact path="/payment" component={Payment} />
                <Route exact path="/availability" component={Availability} />
                <Route exact path="/security" component={Security} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/profile/pics" component={ProfilePhoto} />
                <ProtectedRoutes exact path="/profile/manageBookings" component={ManageBookings} />
                <Route exact path="/dashboard">
                  <ProfilePhoto />
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
