import React from 'react';

import CompactItem from '@components/Commons/HistoryItem/CompactItem';

import * as Card from '@components/Commons/Card.styled';
import { mockList } from '@utils/mock';

const DummyHistory = () => {
  return (
    <Card.Wrapper width="30%" margin="0 0 20px 20px" borderRadius="8px">
      <Card.Title margin="0 0 24px 0">방문 기록</Card.Title>
      {mockList.map((v) => {
        return <CompactItem key={v.id} {...v} />;
      })}
    </Card.Wrapper>
  );
};

export default DummyHistory;
