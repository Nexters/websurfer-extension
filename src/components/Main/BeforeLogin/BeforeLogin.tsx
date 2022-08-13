import React from 'react';

import { useGoogleLogin } from '@react-oauth/google';
import Axios from '@utils/axios';

import { getToken, getUser } from '@redux/user';
import { useAppDispatch } from '@redux/store';

const BefoerLogin = () => {
  const dispatch = useAppDispatch();
  const onClick = useGoogleLogin({
    onSuccess: async ({ access_token }) => {
      const { data } = await Axios.get<{ sub: string; email: string }>(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
      );

      const { email, sub } = data;

      dispatch(getToken({ email, googleTokenId: sub }));

      setTimeout(() => {
        dispatch(getUser());
      }, 2000);
    },
  });
  return (
    <button onClick={() => onClick()}>
      구글 로그인
      {/* <GoogleLogin
        onSuccess={async (credentialResponse) => {
          console.log(credentialResponse);
          const { data } = await Axios.get<{ sub: string; email: string }>(
            `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${credential}`
          );
          console;
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      /> */}
    </button>
  );
};

export default BefoerLogin;
