import React, { useState } from 'react';

import Tab from '@components/Commons/Tab';
import Modal from '@components/Commons/Modal';

import MostVisitWebSiteModalContent from './MostVisitWebSiteModalContent';

import { useAppSelector } from '@redux/store';
import { dashboardStatPrevSelector } from '@redux/dashboard';

type TabNameType = 'last' | 'this';

type Props = {};

const MostVisitWebSIteModal = (props: Props) => {
  const [currentTab, setCurrentTab] = useState<TabNameType>('this');
  const hasLastWeekData = useAppSelector(dashboardStatPrevSelector);

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
          {
            title: '지난주',
            isActive: currentTab === 'last',
            onClick: () => {
              setCurrentTab('last');
            },
            disabled: hasLastWeekData.daiilyReports.length === 0,
          },
        ]}
      />

      {currentTab === 'this' && <MostVisitWebSiteModalContent period="this" />}
      {currentTab === 'last' && <MostVisitWebSiteModalContent period="last" />}
    </Modal>
  );
};

export default MostVisitWebSIteModal;
