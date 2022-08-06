import React, { useState } from 'react';
import { DateRange } from 'react-date-range';

import * as S from './SearchBar.styled';

import { CalendarIcon, SearchIcon } from '../../../assets/img/svg-icon-paths';

interface Props {
  placeholder?: string;
  hasFilter?: boolean;
}

const SearchBar = ({ placeholder = 'Search', hasFilter = true }: Props) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);

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
          <DateRange showDateDisplay={isFilterActive} />
        </S.FilterWrapper>
      )}
    </S.Wrapper>
  );
};

export default SearchBar;
