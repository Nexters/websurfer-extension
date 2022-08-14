import React from 'react';

import * as S from './styles';

import NoResultImg from '@assets/img/no-result-keyword';

interface Props {
  keyword: string | undefined;
}

const NoListWithKeyword = ({ keyword }: Props) => {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Img src={NoResultImg} />
        <S.Description>
          <b>{keyword}</b>의 방문기록이 없어요.
        </S.Description>
        <S.Description>검색어를 다시 확인해주시겠어요?</S.Description>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default NoListWithKeyword;
