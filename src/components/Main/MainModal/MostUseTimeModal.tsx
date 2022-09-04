import React, { useState } from 'react';

import Tab from '@components/Commons/Tab';
import Modal from '@components/Commons/Modal';

import MostUseTimeDetailModal from './MostUseTimeDetailModal';

import { useAppSelector } from '@redux/store';
import { dashboardStatPrevSelector } from '@redux/dashboard';

type TabNameType = 'last' | 'this';

type Props = {};

const MostUseTimeModal = (props: Props) => {
  const [currentTab, setCurrentTab] = useState<TabNameType>('this');
  const hasLastWeekData = useAppSelector(dashboardStatPrevSelector);

  return (
    <Modal type="frequency" title="자주 사용한 시간대">
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

      {currentTab === 'this' && <MostUseTimeDetailModal period="this" />}
      {currentTab === 'last' && <MostUseTimeDetailModal period="last" />}
    </Modal>
  );
};

export default MostUseTimeModal;
