import { AuthApiData } from '../../interface/AuthApiData';
import { FetchFormOptions } from '../../interface/FetchOptions';

const uploadPictureRequest = async (file: Express.Multer.File): Promise<AuthApiData> => {
  const fetchOptions: FetchFormOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    file: file,
    credentials: 'include',
  };
  return await fetch(`/ProfilePhoto/pic`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Could not upload picture, please try again.' },
    }));
};

export default uploadPictureRequest;
