export interface User {
  id: string;
  email: string;
  username: string;
}

export interface SearchUsersApiData {
  users?: User[];
  error?: { message: string };
}
