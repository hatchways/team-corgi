import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const editProfile = async (
  email?: string,
  firstName?: string,
  lastName?: string,
  phone?: number,
  description?: string,
  city?: string,
): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, firstName, lastName, phone, description, city }),
    credentials: 'include',
  };
  return await fetch(`/auth/login`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default editProfile;
