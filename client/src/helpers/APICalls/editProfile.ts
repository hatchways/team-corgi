import { ProfileApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';
import { changeProfile } from '../../interface/Profile';

const editProfile = async (id: string, profile: changeProfile): Promise<ProfileApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profile),
    credentials: 'include',
  };
  return await fetch(`/profile/${id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default editProfile;
