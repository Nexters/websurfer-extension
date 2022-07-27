import React, { useState } from 'react';

import * as S from './SearchBar.styled';

import { FilterIcon, SearchIcon } from '../../../assets/img/svg-icon-paths';

interface Props {
  placeholder?: string;
  hasFilter?: boolean;
}

const SearchBar = ({ placeholder = 'Search', hasFilter = true }: Props) => {
  const { isActive, setIsActive } = useState(false);

  return (
    <S.Wrapper>
      <S.SearchIcon src={SearchIcon} />
      <S.Input
        onFocus={console.log}
        placeholder={placeholder}
        hasFilter={hasFilter}
      />
      {hasFilter && <S.Filter src={FilterIcon} alt="filter" />}
    </S.Wrapper>
  );
};

export default SearchBar;
