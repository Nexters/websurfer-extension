import React, { useState } from 'react';

import Tab from '@components/Commons/Tab';
import Modal from '@components/Commons/Modal';

import MostVisitWebSiteModalThis from './MostVisitWebSiteModalThis';

import { useAppSelector } from '@redux/store';
import { hasLastWeekDataSelector } from '@redux/common';

type TabNameType = 'last' | 'this';

type Props = {};

const MostVisitWebSIteModal = (props: Props) => {
  const [currentTab, setCurrentTab] = useState<TabNameType>('this');
  const hasLastWeekData = useAppSelector(hasLastWeekDataSelector);

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
            disabled: !hasLastWeekData,
          },
        ]}
      />

      {currentTab === 'this' && <MostVisitWebSiteModalThis />}
      {currentTab === 'last' && <MostVisitWebSiteModalThis />}
    </Modal>
  );
};

export default MostVisitWebSIteModal;
