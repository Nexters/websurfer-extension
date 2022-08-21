import React from 'react';

import * as S from './NoDataModal.styled';

import noDataImg from '@assets/img/nodata.png';

type Props = {};

const NoDataModal = (props: Props) => {
  return (
    <S.ContetnWrapper>
      <S.ContentItem>
        <S.NoDataImg src={noDataImg} alt="no-data" />
        <S.MainTitle>웹 서핑을 즐기고 돌아와주세요</S.MainTitle>
        <S.SubTitle>
          아직 서퍼님의 성향을 알아볼 수 있는 데이터가 없어요.
        </S.SubTitle>
        <S.SubTitle>
          잠시 웹 서핑을 즐기고 돌아와주시면 분석을 시작할게요.
        </S.SubTitle>
      </S.ContentItem>
    </S.ContetnWrapper>
  );
};

export default NoDataModal;
