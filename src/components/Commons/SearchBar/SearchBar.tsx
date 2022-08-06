import React, { useState } from 'react';
import { DateRange } from 'react-date-range';

import * as S from './SearchBar.styled';

import {
  CalendarIcon,
  SearchIcon,
  RefreshIcon,
} from '../../../assets/img/svg-icon-paths';

interface Props {
  placeholder?: string;
  hasFilter?: boolean;
}

const SearchBar = ({ placeholder = 'Search', hasFilter = true }: Props) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
          <DateRange
            showDateDisplay={isFilterActive}
            maxDate={new Date()}
            onChange={console.log}
          />
        </S.FilterWrapper>
      )}
    </S.Wrapper>
  );
};

export default SearchBar;
