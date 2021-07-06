import { Profile } from './Profile';

export interface INotification {
  sender: Profile;
  receiver: Profile;
  type: string;
  createdAt: Date;
  read: boolean;
  title?: String;
}
