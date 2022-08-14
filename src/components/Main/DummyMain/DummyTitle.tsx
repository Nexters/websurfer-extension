import React from 'react';

import { Oceanographer } from '@assets/img/svg-icon-paths';

import useGoogleLogin from '@hooks/useGoogleLogin';

import * as S from './styled';

const DummyTitle = () => {
  const { clickGoogleLogin } = useGoogleLogin();

  return (
    <S.DummyTitleWrapper>
      <S.TitleContainer>
        <S.TitleWrapper>
          <S.Title>정보의 바다 속, 나는 어떤 웹서퍼일까요?</S.Title>
        </S.TitleWrapper>
        <S.Description>
          크롬 방문 기록으로 나의 웹 서핑 사용 패턴을 알아봐요
        </S.Description>
        <S.GoogleLogin onClick={clickGoogleLogin}>
          구글 계정으로 로그인
        </S.GoogleLogin>
      </S.TitleContainer>
      <S.MainImage src={Oceanographer} alt="해양학자가 서핑하는 모습" />
    </S.DummyTitleWrapper>
  );
};

export default DummyTitle;
