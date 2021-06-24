import { AuthApiData } from '../../interface/AuthApiData';
import { FetchFormOptions } from '../../interface/FetchOptions';

const uploadPictureRequest = async (file: FormData): Promise<AuthApiData> => {
  const fetchOptions: FetchFormOptions = {
    method: 'POST',
    body: file,
  };
  console.log(file);
  return await fetch(`/api/pic/upload`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Could not upload picture, please try again.' },
    }));
};
export default uploadPictureRequest;
