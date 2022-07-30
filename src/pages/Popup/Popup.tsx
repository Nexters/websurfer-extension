import React from 'react';

import * as S from './Popup.styled';

import { SearchBar, FullItem } from '../../components/Commons';

import { HomeIcon, CloseIcon } from '../../assets/img/svg-icon-paths';

import { chromeHistory, IrefinedItem } from '../../utils/mock';

const Popup = () => {
  const goApp = () => {
    window.chrome.tabs.create({
      url: window.chrome.runtime.getURL('/options.html'),
    });
  };

  const renderTop = () => {
    return (
      <S.TopWrapper>
        <S.HomeWrapper onClick={goApp}>
          <S.HomeIcon alt="home-icon" src={HomeIcon}></S.HomeIcon>
          <S.HomeSpan>홈으로 이동</S.HomeSpan>
        </S.HomeWrapper>
        <S.HomeIcon
          alt="close-icon"
          src={CloseIcon}
          onClick={window.close}
        ></S.HomeIcon>
      </S.TopWrapper>
    );
  };

  const renderMiddle = () => {
    return (
      <S.MiddleWrapper>
        <S.MiddleTitleWrapper>
          <S.SubTitle>Hi Shaka Shaka,</S.SubTitle>
          <S.MainTitle>아까 만났던 파도를 찾고 있나요?</S.MainTitle>
        </S.MiddleTitleWrapper>
        <SearchBar hasFilter={true} />
      </S.MiddleWrapper>
    );
  };

  const historyByVisitDate = chromeHistory.reduce(
    (acc: object, val: IrefinedItem) => {
      const { lastVisitDate } = val;

      if (lastVisitDate) {
        const values = acc[lastVisitDate] || [];
        acc[lastVisitDate] = [...values, val];
      }

      return acc;
    },
    {}
  );

  const renderHistory = () => {
    const values = Object.entries(historyByVisitDate);
    return values.map(([date, histories]: [string, IrefinedItem[]]) => {
      return (
        <div key={date}>
          <S.CategoryDate>{date}</S.CategoryDate>
          {histories.map((value) => {
            return <FullItem key={value.id} {...value} />;
          })}
        </div>
      );
    });
  };

  const renderBottom = () => {
    return <S.BottomWrapper>{renderHistory()}</S.BottomWrapper>;
  };

  return (
    <S.Wrapper>
      {renderTop()}
      {renderMiddle()}
      {renderBottom()}
    </S.Wrapper>
  );
};

export default Popup;
