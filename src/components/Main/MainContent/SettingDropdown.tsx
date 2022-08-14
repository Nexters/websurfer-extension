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
      cb: () => {},
    },
    {
      name: '팀샤카샤카',
      cb: () => {},
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
