export interface Profile {
  _id: string;
  firstName: string;
  lastName: string;
  title?: string;
  profilePic?: string;
  description?: string;
  wage: number;
  ratings: Array<number>;
  city: string;
}
export interface changeProfile {
  _id?: string;
  firstName?: string;
  lastName?: string;
  title?: string;
  profilePic?: string;
  description?: string;
  wage?: number;
  ratings?: Array<number>;
  city?: string;
}
