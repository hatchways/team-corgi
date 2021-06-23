import { AuthApiData } from '../../interface/AuthApiData';
import { FetchFormOptions } from '../../interface/FetchOptions';

const uploadPictureRequest = async (file: string): Promise<AuthApiData> => {
  const fetchOptions: FetchFormOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: file }),
    credentials: 'include',
  };
  console.log(file);
  return await fetch(`/api/pic/upload`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Could not upload picture, please try again.' },
    }));
};

export default uploadPictureRequest;
