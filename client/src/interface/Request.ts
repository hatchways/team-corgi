export interface Request {
  name: string;
  date: string;
  startTime: number;
  endTime: number;
  pic: string;
  offer?: boolean;
  accepted?: boolean;
}
