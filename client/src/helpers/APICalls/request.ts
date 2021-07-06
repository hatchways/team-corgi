import { FetchOptions } from '../../interface/FetchOptions';
import { Request, RequestApiData } from '../../interface/Request';

export const postRequest = async (request: Request): Promise<RequestApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    body: JSON.stringify({ request }),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/requests`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server, please try again' },
    }));
};

export const editRequest = async (id: string, request: Request): Promise<RequestApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    body: JSON.stringify({ request }),
    credentials: 'include',
  };
  return await fetch(`/requests/:${id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server, please try again' },
    }));
};

export const getRequest = async (user: string): Promise<RequestApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user }),
    credentials: 'include',
  };
  return await fetch(`/requests`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};
