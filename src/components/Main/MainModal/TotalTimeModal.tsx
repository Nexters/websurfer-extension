import React, { useState } from 'react';

import Tab from '@components/Commons/Tab';
import Modal from '@components/Commons/Modal';

import TotalTimeModalDetail from './TotalTimeModalDetail';

import { useAppSelector } from '@redux/store';
import { hasLastWeekDataSelector } from '@redux/common';

type TabNameType = 'last' | 'this';

type Props = {};

const TotalTimeModal = (props: Props) => {
  const [currentTab, setCurrentTab] = useState<TabNameType>('this');
  const hasLastWeekData = useAppSelector(hasLastWeekDataSelector);

  return (
    <Modal type="totalTime" title="총 사용 시간">
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

      {currentTab === 'this' && <TotalTimeModalDetail period="this" />}
      {currentTab === 'last' && <TotalTimeModalDetail period="last" />}
    </Modal>
  );
};

export default TotalTimeModal;
