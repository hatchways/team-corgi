import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';

import './App.css';
import ProfileSettings from './components/ProfileSettings/ProfileSettings';
import Sidebar from './components/Sidebar/SideBar';
import EditProfile from './components/EditProfile/EditProfile';
import ProfilePhoto from './components/ProfilePhoto/ProfilePhoto';
import Payment from './components/Payment/Payment';
import Availability from './components/Availability/Availability';
import Security from './components/Security/Security';
import Settings from './components/Settings/Settings';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <Switch>
                <Route exact path="/login" component={EditProfile} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/editprofile" component={EditProfile}></Route>
                <Route exact path="/profilephoto" component={ProfilePhoto} />
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
