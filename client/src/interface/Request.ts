export interface Request {
  name: string;
  day: Date;
  startTime: Date;
  endTime: Date;
  pic?: string;
  accepted?: boolean;
  _id: string;
  user: string;
  sitter: string;
}

export interface RequestApiData {
  requests?: Request[];
  request?: Request;
  error?: { message: string };
}
