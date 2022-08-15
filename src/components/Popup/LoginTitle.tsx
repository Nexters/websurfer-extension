import React from 'react';

import { Oceanographer } from '@assets/img/svg-icon-paths';

import * as S from './LoginTitle.styled';

interface ILoginTitle {
  goApp: () => void;
  loggedIn: boolean;
}

const LoginTitle = ({ goApp, loggedIn }: ILoginTitle) => {
  return (
    <S.DummyTitleWrapper>
      <S.TitleContainer>
        <S.Title>
          {loggedIn
            ? '하루 동안 웹 서핑을 즐기고 와주세요'
            : '정보의 바다 속, 나는 어떤 웹서퍼일까요?'}
        </S.Title>
        <S.Description>
          {loggedIn
            ? '웹 서퍼 이용이 처음인 당신의 웹 서핑 성향을 분석하기 위해서는'
            : '크롬 방문 기록으로 나의 웹 서핑 사용 패턴을 알아봐요'}
        </S.Description>
        {loggedIn ? (
          <S.Description>{<b>최소 하루</b>}의 데이터가 필요해요.</S.Description>
        ) : (
          <S.GoogleLogin onClick={goApp}>구글 계정으로 로그인</S.GoogleLogin>
        )}
      </S.TitleContainer>
      <S.MainImage src={Oceanographer} alt="해양학자가 서핑하는 모습" />
    </S.DummyTitleWrapper>
  );
};

export default LoginTitle;
