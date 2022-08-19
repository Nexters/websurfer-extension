import React from 'react';
import * as S from './SettingDropdown.styled';

import { useAppDispatch } from '@redux/store';
import { logout } from '@redux/user';

import useGoogleLogin from '@hooks/useGoogleLogin';

type Props = {
  isSetting: boolean;
  setIsSetting: React.Dispatch<React.SetStateAction<boolean>>;
};

const SettingDropdown = ({ isSetting, setIsSetting }: Props) => {
  const dispatch = useAppDispatch();
  const { clickGoogleLogin } = useGoogleLogin();
  const options = [
    {
      name: '로그아웃',
      cb: () => dispatch(logout()),
    },
    {
      name: '계정전환',
      cb: clickGoogleLogin,
    },
    {
      name: '문의하기',
      cb: () => window.open('mailto:teamwebsurfer@gmail.com'),
    },
    {
      name: '팀샤카샤카',
      cb: () =>
        window.open(
          'https://pushy-wallet-089.notion.site/Web-surfer-40d0302419fc4a288558ad27e4fdbd51',
          '_blank'
        ),
    },
  ];

  return (
    <S.Wrapper isActive={isSetting}>
      {options.map(({ name, cb }) => {
        return (
          <S.Item
            key={name}
            onClick={() => {
              cb();
              setIsSetting(false);
            }}
          >
            {name}
          </S.Item>
        );
      })}
    </S.Wrapper>
  );
};

export default SettingDropdown;
