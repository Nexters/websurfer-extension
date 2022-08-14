import { useGoogleLogin } from '@react-oauth/google';

import { useAppDispatch } from '@redux/store';
import { getToken, getUser } from '@redux/user';
import { getHistoryList } from '@redux/history';

import Axios from '@utils/axios';

const useGoogleLoginCb = () => {
  const dispatch = useAppDispatch();
  const clickGoogleLogin = useGoogleLogin({
    onSuccess: async ({ access_token }) => {
      const { data } = await Axios.get<{ sub: string; email: string }>(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
      );

      const { email, sub } = data;

      await dispatch(getToken({ email, googleTokenId: sub }));
      await dispatch(getUser());
      await dispatch(getHistoryList({}));
    },
  });

  return { clickGoogleLogin };
};

export default useGoogleLoginCb;
