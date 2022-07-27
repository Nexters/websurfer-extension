import React from 'react';

import { SearchBar } from '../../Commons';

import * as S from './MainHistory.styled';

import { ZoomIcon } from '../../../assets/img/svg-icon-paths';

type Props = {
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
  isFocus: boolean;
};

const MainHistory = ({ isFocus, setIsFocus }: Props) => {
  return (
    <div>
      <S.TitleWrapper>
        <S.MainTitle>방문 기록</S.MainTitle>
        <img
          alt="zoom"
          src={ZoomIcon}
          onClick={() => setIsFocus(!isFocus)}
        ></img>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <SearchBar />
      </S.ContentWrapper>
    </div>
  );
};

export default MainHistory;
