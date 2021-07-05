export interface Profile {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  title?: string;
  profilePic?: string;
  description?: string;
  phone?: number;
  wage?: number;
  ratings?: Array<number>;
  city?: string;
}
