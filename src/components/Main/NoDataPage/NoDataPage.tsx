import React, { useState } from 'react';

import TopNav from '../MainContent/MainTopNav';
import SettingDropdown from '../MainContent/SettingDropdown';

import * as S from './NoDataPage.styled';

import noDataImg from '@assets/img/nodata.png';

const NoData = () => {
  const [isSetting, setIsSetting] = useState(false);
  const onClickGoSurf = () => window.open('', '_blank');

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <TopNav setIsSetting={setIsSetting} isSetting={isSetting} />
        <S.SettingDropdownWrapper>
          <SettingDropdown setIsSetting={setIsSetting} isSetting={isSetting} />
        </S.SettingDropdownWrapper>
      </S.TopWrapper>
      <S.ContetnWrapper>
        <S.ContentItem>
          <S.NoDataImg src={noDataImg} alt="no-data" />
          <S.MainTitle>하루동안 웹 서핑을 즐기고 와주세요</S.MainTitle>
          <S.SubTitle>웹 서퍼 이용이 처음인 당신의 웹 서핑 성향을</S.SubTitle>
          <S.SubTitle>
            분석하기 위해서는 <b>최소 하루</b>의 데이터가 필요해요
          </S.SubTitle>
          <S.GoSurfButton onClick={onClickGoSurf}>
            웹 서핑 하러가기
          </S.GoSurfButton>
        </S.ContentItem>
      </S.ContetnWrapper>
    </S.Wrapper>
  );
};

export default NoData;
