import React, { useState } from 'react';
import { DateRange } from 'react-date-range';

import * as S from './SearchBar.styled';

import { CalendarIcon, SearchIcon } from '../../../assets/img/svg-icon-paths';

interface Props {
  placeholder?: string;
  hasFilter?: boolean;
}

const SearchBar = ({ placeholder = 'Search', hasFilter = true }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <S.Wrapper>
      <S.SearchIcon src={SearchIcon} />
      <S.Input
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        placeholder={placeholder}
        hasFilter={hasFilter}
        isActive={isActive}
      />
      {hasFilter && (
        <S.Filter isActive={isActive} src={CalendarIcon} alt="filter" />
      )}
      <DateRange showDateDisplay={true} />
    </S.Wrapper>
  );
};

export default SearchBar;
