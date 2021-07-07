import { FetchOptions } from '../../interface/FetchOptions';
import { Request, RequestApiData } from '../../interface/Request';

export const postRequest = async (request: Request): Promise<RequestApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    body: JSON.stringify({ request }),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/request`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server, please try again' },
    }));
};

export const editRequest = async (id: string, request: Request): Promise<RequestApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    body: JSON.stringify({ request }),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/request/${id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server, please try again' },
    }));
};

export const getRequest = async (user: string): Promise<RequestApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  };
  return await fetch(`/request/${user}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};
