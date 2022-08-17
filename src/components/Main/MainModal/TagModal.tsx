import React, { useState } from 'react';

import Tab from '@components/Commons/Tab';
import Modal from '@components/Commons/Modal';

import MostUseTimeDetailModal from './MostUseTimeDetailModal';

import * as S from './TagModal.Styled';

type TabNameType = 'last' | 'this' | 'period';

type Props = {};

const TagModal = (props: Props) => {
  const [currentTab, setCurrentTab] = useState<TabNameType>('this');

  return (
    <Modal type="tag" title="웹 서핑 태그">
      <S.Description>
        매주 서퍼님이 많이 사용하는 사이트에 맞는 웹 서핑 유형을 알려드려요.
      </S.Description>
      <S.CardWrapper>
        <S.Card>
          <S.CardTitle>세상이 궁금한 갈매기aaaaaaaaaaa</S.CardTitle>
          <S.CardDescription>
            학습 / 교육 /
            자기계발aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </S.CardDescription>
          <S.CardImage src="https://user-images.githubusercontent.com/48555121/184919245-9d67ae29-6bb4-4138-b62f-95d6c8aff289.png" />
        </S.Card>
      </S.CardWrapper>
    </Modal>
  );
};

export default TagModal;
