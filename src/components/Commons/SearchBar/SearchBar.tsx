import React, { useState, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

import * as S from './SearchBar.styled';

import {
  CalendarIcon,
  SearchIcon,
  RefreshIcon,
} from '@assets/img/svg-icon-paths';

import { useAppDispatch, useAppSelector } from '@redux/store';
import { getHistoryList } from '@redux/history';
import {
  setIsFilterOnceApplied,
  filterOnceAppliedSelector,
} from '@redux/common';
import { tokenSelector } from '@redux/user';

interface Props {
  placeholder?: string;
  hasFilter?: boolean;
  rawKeyword: string | undefined;
  setRawKeyword: React.Dispatch<React.SetStateAction<string | undefined>>;
}

type TstateDate = Date | undefined;
type TdisplayDate = number | Date;

interface IFilter {
  startDate: TstateDate;
  endDate: TstateDate;
  keyword: string | undefined;
}

const SearchBar = ({
  placeholder = 'Search',
  hasFilter = true,
  rawKeyword,
  setRawKeyword,
}: Props) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [rawStartDate, setRawStartDate] = useState<TstateDate>(new Date());
  const [rawEndDate, setRawEndDate] = useState<TstateDate>(new Date());
  const [filter, setFilter] = useState<IFilter>({
    startDate: undefined,
    endDate: undefined,
    keyword: undefined,
  });

  const dispatch = useAppDispatch();

  const isFilterOnceApplied = useAppSelector(filterOnceAppliedSelector);
  const storeToken = useAppSelector(tokenSelector);

  const filterConfirmDisabled = !rawStartDate || !rawEndDate;

  const onClickApply = () => {
    setFilter({ ...filter, startDate: rawStartDate, endDate: rawEndDate });
    setIsFilterActive(!isFilterActive);
  };

  useEffect(() => {
    // debounce
    const timer = setTimeout(() => {
      setFilter({ ...filter, keyword: rawKeyword });
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [rawKeyword]);

  useEffect(() => {
    const filterApplied = Object.values(filter).some((v) => v !== undefined);
    if (storeToken && filterApplied) {
      dispatch(getHistoryList(filter));

      if (!isFilterOnceApplied) {
        dispatch(setIsFilterOnceApplied(true));
      }
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
            <S.RefreshButton
              alt="refresh"
              src={RefreshIcon}
              onClick={() => {
                setRawStartDate(new Date());
                setRawEndDate(new Date());
              }}
            ></S.RefreshButton>
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
              locale={ko}
            />
          </S.DateRangeWrapper>
          <S.FilterApplyButton
            onClick={onClickApply}
            disabled={filterConfirmDisabled}
          >
            {filterConfirmDisabled
              ? '적용하기'
              : `${format(rawStartDate as TdisplayDate, 'yyyy-MM-dd')}~${format(
                  rawEndDate as TdisplayDate,
                  'yyyy-MM-dd'
                )} 적용하기`}
          </S.FilterApplyButton>
        </S.FilterWrapper>
      )}
    </S.Wrapper>
  );
};

export default SearchBar;
