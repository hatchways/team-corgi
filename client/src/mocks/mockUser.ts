import { User } from '../interface/User';

const mockLoggedInUser: User = {
  id: 'asb1b384fas',
  email: 'mockLoggedInUser@gmail.com',
  username: 'mock LoggedIn user',
};

const mockOtherUser1: User = {
  id: 'as7v28fasn',
  username: 'Mock test user 1',
  email: 'mockTestUser1@gmail.com',
};
const mockOtherUser2: User = {
  id: '1373bf38asb',
  username: 'Mock test user 2',
  email: 'mockTestUser2@gmail.com',
};
const mockOtherUser3: User = {
  id: '183bg83b0',
  username: 'Mock test user 3',
  email: 'mockTestUser3@gmail.com',
};

const mockOtherUsers: User[] = [mockOtherUser1, mockOtherUser2, mockOtherUser3];

export { mockLoggedInUser, mockOtherUsers };
