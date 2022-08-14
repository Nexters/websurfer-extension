import React from 'react';

import SettingDropdown from './SettingDropdown';

import { Oceanographer, QuestionIcon } from '@assets/img/svg-icon-paths';

import * as S from './MainTitle.styled';

type Props = {
  isSetting: boolean;
  setIsSetting: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainTitle = ({ setIsSetting, isSetting }: Props) => {
  return (
    <S.Wrapper>
      <S.TitleContainer>
        <S.SubTitle>이번 주 김넥터 님은</S.SubTitle>
        <S.TitleWrapper>
          <S.Title>열정 뿜뿜 해양학자</S.Title>
          <S.Icon src={QuestionIcon} />
        </S.TitleWrapper>
        <S.Description>
          학습 / 교육 / 자기계발 사이트 사용량이 많아요.
        </S.Description>
      </S.TitleContainer>
      <S.MainImage src={Oceanographer} alt="해양학자가 서핑하는 모습" />
      <SettingDropdown setIsSetting={setIsSetting} isSetting={isSetting} />
    </S.Wrapper>
  );
};

export default MainTitle;
