import { useGoogleLogin } from '@react-oauth/google';

import { useAppDispatch } from '@redux/store';
import { getToken, getUser } from '@redux/user';
import { getStat, getStatPrev } from '@redux/dashboard';
import { getHistoryList } from '@redux/history';
import { setMainLoading } from '@redux/common';
import { getAchievements } from '@redux/tag';

import Axios from '@utils/axios';

const useGoogleLoginCb = () => {
  const dispatch = useAppDispatch();

  const clickGoogleLogin = useGoogleLogin({
    onSuccess: async ({ access_token }) => {
      dispatch(setMainLoading(true));

      const { data } = await Axios.get<{ sub: string; email: string }>(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
      );

      const { email, sub } = data;

      await dispatch(getToken({ email, googleTokenId: sub }));
      await dispatch(getUser());
      await dispatch(
        getHistoryList({
          startDate: undefined,
          endDate: undefined,
          keyword: undefined,
        })
      );
      await dispatch(getStat());
      await dispatch(getStatPrev());
      await dispatch(getAchievements());

      dispatch(setMainLoading(false));
    },
  });

  return { clickGoogleLogin };
};

export default useGoogleLoginCb;
