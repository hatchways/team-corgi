import { User } from './User';
import { Profile } from './Profile';
import { INotification } from './Notification';

export interface AuthApiDataSuccess {
  message: string;
  user: User;
  token: string;
}
export interface AuthProfileApiDataSuccess {
  message: string;
  profile: Profile;
  token: string;
}
export interface ProfileApiData {
  error?: { message: string };
  success?: AuthProfileApiDataSuccess;
}

export interface AuthApiData {
  error?: { message: string };
  success?: AuthApiDataSuccess;
}


export interface NotificationApiDataSuccess {
  notifications: INotification[];
}