import React, { useState } from 'react';

import Tab from '@components/Commons/Tab';
import Modal from '@components/Commons/Modal';

import * as S from './MostVisitWebSIteModal.Styled';
import * as Card from '@components/Main/MainContent/MostVisitWebSite.styled';
import MostVisitWebSiteModalThis from './MostVisitWebSiteModalThis';
import MostVisitWebSiteModalPeriod from './MostVisitWebSiteModalPeriod';

type TabNameType = 'last' | 'this' | 'period';

type Props = {};

const MostVisitWebSIteModal = (props: Props) => {
  const [currentTab, setCurrentTab] = useState<TabNameType>('this');

  return (
    <Modal type="mostVisit" title="자주 방문한 웹사이트">
      <Tab
        items={[
          {
            title: '이번 주',
            isActive: currentTab === 'this',
            onClick: () => {
              setCurrentTab('this');
            },
          },
          // {
          //   title: '지난주',
          //   isActive: currentTab === 'last',
          //   onClick: () => {
          //     setCurrentTab('last');
          //   },
          // },
          // {
          //   title: '기간 선택',
          //   isActive: currentTab === 'period',
          //   onClick: () => {
          //     setCurrentTab('period');
          //   },
          // },
        ]}
      />

      {currentTab === 'this' && <MostVisitWebSiteModalThis />}
      {currentTab === 'last' && <MostVisitWebSiteModalThis />}
      {currentTab === 'period' && <MostVisitWebSiteModalPeriod />}
    </Modal>
  );
};

export default MostVisitWebSIteModal;
