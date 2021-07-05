import { ProfileApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const getUserProfile = async (id: string): Promise<ProfileApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
<<<<<<< HEAD
  return await fetch(`/profile/userProfile/${id}`, fetchOptions)
=======
  return await fetch(`/profile/${id}`, fetchOptions)
>>>>>>> bb34c67d7d7968e41bfb7131573e61b2a637c326
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default getUserProfile;
