export interface Request {
  name: string;
  date: Date;
  startTime: number;
  endTime: number;
  pic: string;
  accepted?: boolean;
}

export interface RequestApiData {
  requests?: Request[];
  request?: Request;
  error?: { message: string };
}
