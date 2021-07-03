export interface Request {
  name: string;
  date: Date;
  startTime: number;
  endTime: number;
  pic: string;
  accepted?: boolean;
}
