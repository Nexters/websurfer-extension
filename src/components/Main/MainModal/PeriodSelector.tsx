import React, { useEffect, useState } from 'react';

import format from 'date-fns/format';
import { DateRange } from 'react-date-range';

import { RepeatIcon } from '@assets/img/svg-icon-paths';

import * as S from './PeriodSelector.Styled';
import * as T from './MostVisitWebSIteModal.type';
import * as DateStyle from '@components/Commons/SearchBar/SearchBar.styled';

type Props = {
  setIsFilterActive: React.Dispatch<React.SetStateAction<boolean>>;
  filter: T.FilterType;
  setFilter: React.Dispatch<React.SetStateAction<T.FilterType>>;
};

const PeriodSelector = (props: Props) => {
  const [rawStartDate, setRawStartDate] = useState<Date | undefined>(
    new Date()
  );
  const [rawEndDate, setRawEndDate] = useState<Date | undefined>(new Date());

  const filterConfirmDisabled = !rawStartDate || !rawEndDate;

  const onClickApply = () => {
    props.setFilter({
      ...props.filter,
      startDate: rawStartDate,
      endDate: rawEndDate,
    });
    props.setIsFilterActive(false);
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Message>기간을 선택하세요</S.Message>
        <S.ResetIcon src={RepeatIcon} alt="reset" />
      </S.TitleWrapper>
      <DateStyle.DateRangeWrapper>
        <DateRange
          showDateDisplay={false}
          ranges={[
            {
              startDate: rawStartDate,
              endDate: rawEndDate,
              key: 'selection',
            },
          ]}
          maxDate={new Date()}
          onChange={({ selection: { startDate, endDate } }) => {
            setRawStartDate(startDate);
            setRawEndDate(endDate);
          }}
        />
      </DateStyle.DateRangeWrapper>
      <DateStyle.FilterApplyButton
        onClick={onClickApply}
        disabled={filterConfirmDisabled}
        style={{ cursor: 'pointer' }}
      >
        {filterConfirmDisabled
          ? '적용하기'
          : `${format(rawStartDate as Date, 'yyyy-MM-dd')} ~
            ${format(rawEndDate as Date, 'yyyy-MM-dd')} 적용하기`}
      </DateStyle.FilterApplyButton>
    </S.Container>
  );
};

export default PeriodSelector;
