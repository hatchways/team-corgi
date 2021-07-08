import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const createRequests = async (
  startTime: Date | null,
  endTime: Date | null,
  day: Date | null,
  user: string,
  sitter: string,
): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ startTime, endTime, day, user, sitter }),
    credentials: 'include',
  };
  return await fetch(`/request`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Could not find any available sitters' },
    }));
};

export default createRequests;
