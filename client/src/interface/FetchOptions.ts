export interface FetchOptions {
  method: string;
  headers?: {
    'Content-Type': string;
  };
  body?: string;
  credentials: RequestCredentials;
}
export interface FetchFormOptions {
  method: string;
  headers?: {
    'Content-Type': string;
  };
  body?: FormData;
  file?: Express.Multer.File;
  credentials?: RequestCredentials;
}
