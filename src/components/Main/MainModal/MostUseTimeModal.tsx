import React, { useState } from 'react';

import Tab from '@components/Commons/Tab';
import Modal from '@components/Commons/Modal';

import MostUseTimeDetailModal from './MostUseTimeDetailModal';

type TabNameType = 'last' | 'this' | 'period';

type Props = {};

const MostUseTimeModal = (props: Props) => {
  const [currentTab, setCurrentTab] = useState<TabNameType>('this');

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

      {currentTab === 'this' && <MostUseTimeDetailModal period="this" />}
      {currentTab === 'last' && <MostUseTimeDetailModal period="last" />}
      {currentTab === 'period' && <MostUseTimeDetailModal period="select" />}
    </Modal>
  );
};

export default MostUseTimeModal;
