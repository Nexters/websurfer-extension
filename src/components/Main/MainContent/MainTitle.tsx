import React from 'react';

import SettingDropdown from './SettingDropdown';

import { QuestionIcon } from '@assets/img/svg-icon-paths';
import { UserEntity } from '@redux/webSerfer.type';

import * as S from './MainTitle.styled';

import { StatResponse } from '@redux/webSerfer.type';

type Props = {
  isSetting: boolean;
  setIsSetting: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserEntity;
  statData: StatResponse;
};

const MainTitle = ({ setIsSetting, isSetting, user, statData }: Props) => {
  const name = (() => {
    const email = user?.email;
    const splitted = email && email.split('@')[0];

    return splitted || email || '김넥터';
  })();
  return (
    <S.Wrapper imageUrl={statData.achievement.imageUrl}>
      <S.TitleContainer>
        <S.SubTitle>이번 주 {name} 님은</S.SubTitle>
        <S.TitleWrapper>
          <S.Title>{statData.achievement.name}</S.Title>
          <S.Icon src={QuestionIcon} />
        </S.TitleWrapper>
        <S.Description>
          {statData.achievement.category} 사이트 사용량이 많아요.
        </S.Description>
      </S.TitleContainer>
      <SettingDropdown setIsSetting={setIsSetting} isSetting={isSetting} />
    </S.Wrapper>
  );
};

export default MainTitle;
