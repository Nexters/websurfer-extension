import React from 'react';
import * as S from './SettingDropdown.styled';

type Props = { isSetting: boolean };

const SettingDropdown = (props: Props) => {
  return (
    <S.Wrapper isActive={props.isSetting}>
      <S.Item>로그아웃</S.Item>
      <S.Item>계정 전환</S.Item>
      <S.Item>문의하기</S.Item>
      <S.Item>팀샤카샤카</S.Item>
    </S.Wrapper>
  );
};

export default SettingDropdown;
