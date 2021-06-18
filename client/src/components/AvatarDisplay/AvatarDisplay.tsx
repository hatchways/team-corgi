import Avatar from '@material-ui/core/Avatar';
import { User } from '../../interface/User';

interface Props {
  loggedIn: boolean;
  user: User;
  className?: string;
}

const AvatarDisplay = ({ user, className }: Props): JSX.Element => {
  return <Avatar alt="Profile Image" src={`https://robohash.org/${user.email}.png`} className={className} />;
};

export default AvatarDisplay;
