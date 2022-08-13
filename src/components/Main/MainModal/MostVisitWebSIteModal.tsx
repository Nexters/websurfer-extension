import React from 'react';

import Tab from '@components/Commons/Tab';
import Modal from '@components/Commons/Modal';

import * as S from './MostVisitWebSIteModal.Styled';
import * as Card from '@components/Main/MainContent/MostVisitWebSite.styled';

type Props = {};

const dummy = ['', '', '', '', '', '', ''];

const MostVisitWebSIteModal = (props: Props) => {
  return (
    <Modal type="mostVisit" title="자주 방문한 웹사이트">
      <Tab
        items={[
          {
            title: '이번 주',
            isActive: true,
          },
          { title: '지난주' },
          { title: '기간 선택' },
        ]}
      />
      <S.PeriodTitle>2000년 00월 00일 - 2000년 00월 00일 에는</S.PeriodTitle>
      <S.Title>Site name 에 자주 방문하셨네요!</S.Title>

      <Card.ItemCardWrapper style={{ marginBottom: '20px' }}>
        <Card.ItemCard primary>
          <Card.ItemCardTitle primary>Pinterest</Card.ItemCardTitle>
          <Card.ItemCardCount primary>190회</Card.ItemCardCount>
        </Card.ItemCard>
        <Card.ItemCard>
          <Card.ItemCardTitle>해쭈 [HAEJOO] - YouTube</Card.ItemCardTitle>
          <Card.ItemCardCount>123회</Card.ItemCardCount>
        </Card.ItemCard>
        <Card.ItemCard>
          <Card.ItemCardTitle>UX 북마크 #20. UX 방법론 A-Z</Card.ItemCardTitle>
          <Card.ItemCardCount>86회</Card.ItemCardCount>
        </Card.ItemCard>
      </Card.ItemCardWrapper>

      {dummy.map((value, index) => (
        <S.SiteListContainer>
          <S.SiteInformationWrapper>
            <S.SiteListNumber>{index + 4}</S.SiteListNumber>
            <S.SiteListIcon />
            <S.SiteListTitle>
              site fsdfs dkjfskd fjskdlfjsekldfjs kfsdkl fjdsklfjsdkl
              fjsdsdfsdfsdfs dfsdf sdfsdfsdfsd fsdkfjslf sdjflsdj fsdlkjfslkj
            </S.SiteListTitle>
          </S.SiteInformationWrapper>
          <S.SiteListCount>0000회</S.SiteListCount>
        </S.SiteListContainer>
      ))}
    </Modal>
  );
};

export default MostVisitWebSIteModal;
