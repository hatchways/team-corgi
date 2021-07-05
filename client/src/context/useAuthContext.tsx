import { useState, useContext, createContext, FunctionComponent, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthApiData, AuthApiDataSuccess, AuthProfileApiDataSuccess, ProfileApiData } from '../interface/AuthApiData';
import { User } from '../interface/User';
import loginWithCookies from '../helpers/APICalls/loginWithCookies';
import logoutAPI from '../helpers/APICalls/logout';
import { Profile } from '../interface/Profile';
import getProfile from '../helpers/APICalls/getProfile';
import { INotification } from '../interface/Notification';
import getNotifications from '../helpers/APICalls/getNotifications';

interface IAuthContext {
  loggedInUser: User | null | undefined;
  updateLoginContext: (data: AuthApiDataSuccess) => void;
  userProfile: Profile | undefined | null;
  notifications: INotification[] | null | undefined;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  loggedInUser: undefined,
  updateLoginContext: () => null,
  logout: () => null,
  userProfile: undefined,
  notifications: undefined,
});

export const AuthProvider: FunctionComponent = ({ children }): JSX.Element => {
  // default undefined before loading, once loaded provide user or null if logged out
  const [loggedInUser, setLoggedInUser] = useState<User | null | undefined>();
  const [userProfile, setUserProfile] = useState<Profile | null | undefined>();
  const [notifications, setNotifications] = useState<INotification[] | null | undefined>();
  const history = useHistory();

  const getNotificationsFunction = async (profile: Profile | undefined | null) => {
    try {
      const nots = await getNotifications(profile?._id);
      setNotifications(nots.notifications);
    } catch {
      (err: Error) => {
        console.log(err);
      };
    }
  };

  const getProfileFunction = async (id: string) => {
    try {
      const profile = await getProfile(id);
      setUserProfile(profile.success?.profile);
      return profile.success?.profile;
    } catch {
      (err: Error) => console.log(err);
    }
  };

  const updateLoginContext = useCallback(
    (data: AuthApiDataSuccess) => {
      setLoggedInUser(data.user);
      history.push('/dashboard');
    },
    [history],
  );

  const logout = useCallback(async () => {
    // needed to remove token cookie
    await logoutAPI()
      .then(() => {
        history.push('/login');
        setLoggedInUser(null);
        setUserProfile(null);
      })
      .catch((error) => console.error(error));
  }, [history]);
  // use our cookies to check if we can login straight away
  useEffect(() => {
    const checkLoginWithCookies = async () => {
      await loginWithCookies().then((data: AuthApiData) => {
        if (data.success) {
          updateLoginContext(data.success);
          getProfileFunction(data.success.user.id);
          getNotificationsFunction(userProfile);

          history.push('/dashboard');
        } else {
          // don't need to provide error feedback as this just means user doesn't have saved cookies or the cookies have not been authenticated on the backend
          setLoggedInUser(null);
          history.push('/login');
        }
      });
    };
    checkLoginWithCookies();
  }, [updateLoginContext, history, userProfile]);
  return (
    <AuthContext.Provider value={{ loggedInUser, updateLoginContext, logout, userProfile, notifications }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContext {
  return useContext(AuthContext);
}
