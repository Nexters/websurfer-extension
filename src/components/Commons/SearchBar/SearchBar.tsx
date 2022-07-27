import React from 'react';

import * as S from './SearchBar.styled';

import FilterIcon from '../../../assets/img/icon-filter2.svg';
import SearchIcon from '../../../assets/img/icon-search-mono.svg';

interface Props {
  placeholder?: string;
  hasFilter?: boolean;
}

const SearchBar = (props: Props) => {
  const { placeholder = 'Search', hasFilter = true } = props;
  return (
    <S.Wrapper>
      <S.SearchIcon src={SearchIcon} />
      <S.Input placeholder={placeholder} hasFilter={hasFilter} />
      {hasFilter && <S.Filter src={FilterIcon} alt="filter" />}
    </S.Wrapper>
  );
};

export default SearchBar;
