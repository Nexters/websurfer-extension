import React, { useState, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import debounce from 'lodash.debounce';

import * as S from './SearchBar.styled';

import {
  CalendarIcon,
  SearchIcon,
  RefreshIcon,
} from '@assets/img/svg-icon-paths';

import { useAppDispatch } from '@redux/store';
import { getHistoryList } from '@redux/history';

import Axios from '@utils/axios';
interface Props {
  placeholder?: string;
  hasFilter?: boolean;
}

type TstateDate = Date | undefined;
type TdisplayDate = number | Date;

interface IFilter {
  startDate: TstateDate;
  endDate: TstateDate;
  keyword: string;
}

const SearchBar = ({ placeholder = 'Search', hasFilter = true }: Props) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [rawKeyword, setRawKeyword] = useState<string>('');
  const [rawStartDate, setRawStartDate] = useState<TstateDate>(new Date());
  const [rawEndDate, setRawEndDate] = useState<TstateDate>(new Date());
  const [filter, setFilter] = useState<IFilter>({
    startDate: undefined,
    endDate: undefined,
    keyword: '',
  });

  const dispatch = useAppDispatch();

  const filterConfirmDisabled = !rawStartDate || !rawEndDate;

  const onClickApply = () => {
    setFilter({ ...filter, startDate: rawStartDate, endDate: rawEndDate });
    setIsFilterActive(!isFilterActive);
  };

  const callHistoryByKeyword = debounce(function (keyword: string) {
    setFilter({ ...filter, keyword });
  }, 500);

  useEffect(() => {
    // debounce
    const timer = setTimeout(() => {
      callHistoryByKeyword(rawKeyword);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [rawKeyword]);

  useEffect(() => {
    if (Axios.defaults.headers.common.Authorization) {
      dispatch(getHistoryList(filter));
    }
  }, [dispatch, filter]);

  return (
    <S.Wrapper>
      <S.SearchIcon src={SearchIcon} />
      <S.Input
        onFocus={() => setIsInputActive(true)}
        onBlur={() => setIsInputActive(false)}
        placeholder={placeholder}
        hasFilter={hasFilter}
        isInputActive={isInputActive}
        value={rawKeyword}
        onChange={({ target }) => {
          setRawKeyword(target.value);
        }}
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
          </S.DateRangeWrapper>
          <S.FilterApplyButton
            onClick={onClickApply}
            disabled={filterConfirmDisabled}
          >
            {filterConfirmDisabled
              ? '적용하기'
              : `${format(rawStartDate as TdisplayDate, 'yyyy-MM-dd')} ~
            ${format(rawEndDate as TdisplayDate, 'yyyy-MM-dd')} 적용하기`}
          </S.FilterApplyButton>
        </S.FilterWrapper>
      )}
    </S.Wrapper>
  );
};

export default SearchBar;
