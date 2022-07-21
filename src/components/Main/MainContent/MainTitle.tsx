import React from 'react';

import MainSerferImage from '../../../assets/img/img-main-serfer.svg';

import * as S from './MainTitle.styled';

type Props = {};

const MainTitle = (props: Props) => {
  return (
    <S.Wrapper>
      <S.TitleContainer>
        <S.SubTitle>Hi Shaka Shaka,</S.SubTitle>
        <S.Title>아까 만났던 파도를</S.Title>
        <S.Title>찾고 있나요?</S.Title>
      </S.TitleContainer>
      <S.MainImage src={MainSerferImage} alt="Web Surfer" />
    </S.Wrapper>
  );
};

export default MainTitle;
