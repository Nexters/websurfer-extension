import React from 'react';

import { Oceanographer } from '@assets/img/svg-icon-paths';
import noDataImg from '@assets/img/nodata.png';

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
            ? '웹 서핑을 즐기고 돌아와주세요'
            : '정보의 바다 속, 나는 어떤 웹서퍼일까요?'}
        </S.Title>
        <S.Description>
          {loggedIn
            ? '아직 서퍼님의 성향을 알아볼 수 있는 데이터가 없어요.'
            : '크롬 방문 기록으로 나의 웹 서핑 사용 패턴을 알아봐요'}
        </S.Description>
        {loggedIn ? (
          <S.Description>
            잠시 웹 서핑을 즐기고 돌아와주시면 분석을 시작할게요.
          </S.Description>
        ) : (
          <S.GoogleLogin onClick={goApp}>구글 계정으로 로그인</S.GoogleLogin>
        )}
      </S.TitleContainer>
      <S.MainImage
        src={loggedIn ? noDataImg : Oceanographer}
        alt="해양학자가 서핑하는 모습"
      />
    </S.DummyTitleWrapper>
  );
};

export default LoginTitle;
