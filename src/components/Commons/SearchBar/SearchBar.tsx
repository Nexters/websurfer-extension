import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';

import * as S from './SearchBar.styled';

import {
  CalendarIcon,
  SearchIcon,
  RefreshIcon,
} from '@assets/img/svg-icon-paths';

interface Props {
  placeholder?: string;
  hasFilter?: boolean;
}

type TstateDate = Date | undefined;
type TdisplayDate = number | Date;

const SearchBar = ({ placeholder = 'Search', hasFilter = true }: Props) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [startDate, setStartDate] = useState<TstateDate>(new Date());
  const [endDate, setEndDate] = useState<TstateDate>(new Date());

  const filterConfirmDisabled = !startDate || !endDate;

  return (
    <S.Wrapper>
      <S.SearchIcon src={SearchIcon} />
      <S.Input
        onFocus={() => setIsInputActive(true)}
        onBlur={() => setIsInputActive(false)}
        placeholder={placeholder}
        hasFilter={hasFilter}
        isInputActive={isInputActive}
      />
      {hasFilter && (
        <S.Filter
          isInputActive={isInputActive}
          onClick={() => setIsFilterActive(!isFilterActive)}
          src={CalendarIcon}
          alt="filter"
        />
      )}
      {isFilterActive && (
        <S.FilterWrapper>
          <S.FilterTopWrapper>
            <S.FilterTitle>기간 선택</S.FilterTitle>
            <S.RefreshButton alt="refresh" src={RefreshIcon}></S.RefreshButton>
          </S.FilterTopWrapper>
          <S.DateRangeWrapper>
            <DateRange
              showDateDisplay={false}
              ranges={[{ startDate, endDate, key: 'selection' }]}
              maxDate={new Date()}
              onChange={({ selection: { startDate, endDate } }) => {
                setStartDate(startDate);
                setEndDate(endDate);
              }}
            />
          </S.DateRangeWrapper>
          <S.FilterApplyButton
            onClick={() => {
              setIsFilterActive(!isFilterActive);
            }}
            disabled={filterConfirmDisabled}
          >
            {filterConfirmDisabled
              ? '적용하기'
              : `${format(startDate as TdisplayDate, 'yyyy-MM-dd')} ~
            ${format(endDate as TdisplayDate, 'yyyy-MM-dd')} 적용하기`}
          </S.FilterApplyButton>
        </S.FilterWrapper>
      )}
    </S.Wrapper>
  );
};

export default SearchBar;
