import React, { useState } from 'react';

import Modal from '@components/Commons/Modal';

import { useAppSelector } from '@redux/store';
import { tagSelector } from '@redux/tag';

import * as S from './TagModal.Styled';

type Props = {};

const TagModal = (props: Props) => {
  const tagData = useAppSelector(tagSelector);

  return (
    <Modal type="tag" title="웹 서핑 태그">
      <S.Description>
        매주 서퍼님이 많이 사용하는 사이트에 맞는 웹 서핑 유형을 알려드려요.
      </S.Description>
      <S.CardWrapper>
        {tagData?.map((value) => (
          <S.Card key={value.id}>
            <S.CardTitle>{value.name}</S.CardTitle>
            <S.CardDescription>{value.category}</S.CardDescription>
            <S.CardImage src={value.cardImageUrl} alt={value.name} />
          </S.Card>
        ))}
      </S.CardWrapper>
    </Modal>
  );
};

export default TagModal;
