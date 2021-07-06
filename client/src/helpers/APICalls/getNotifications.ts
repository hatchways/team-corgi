import { NotificationApiDataSuccess } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const getNotifications = async (id: string | undefined): Promise<NotificationApiDataSuccess> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/notifications/unread/${id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default getNotifications;
