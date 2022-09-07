import React, { useState, useEffect, useRef } from 'react';
import { DateRange } from 'react-date-range';
import { format, startOfDay, endOfDay } from 'date-fns';
import { ko } from 'date-fns/locale';

import * as S from './SearchBar.styled';

import {
  CalendarIcon,
  SearchIcon,
  RepeatIcon,
  CalendarBlueIcon,
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
  isPopup?: boolean;
  active?: boolean;
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
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
  isPopup = false,
  setActive,
}: Props) => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [rawStartDate, setRawStartDate] = useState<TstateDate>(undefined);
  const [rawEndDate, setRawEndDate] = useState<TstateDate>(undefined);
  const [filter, setFilter] = useState<IFilter>({
    startDate: undefined,
    endDate: undefined,
    keyword: undefined,
  });

  const notInitialRender = useRef(false);

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
    if (rawKeyword !== undefined) {
      const timer = setTimeout(() => {
        setFilter({ ...filter, keyword: rawKeyword });
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [rawKeyword]);

  useEffect(() => {
    if (notInitialRender.current) {
      if (storeToken) {
        dispatch(getHistoryList(filter));

        if (!isFilterOnceApplied) {
          dispatch(setIsFilterOnceApplied(true));
        }
      }
    } else {
      notInitialRender.current = true;
    }
  }, [dispatch, filter]);

  return (
    <S.Wrapper isPopup={isPopup}>
      <S.SearchIcon src={SearchIcon} />
      <S.Input
        placeholder={placeholder}
        hasFilter={hasFilter}
        value={rawKeyword}
        onChange={({ target }) => {
          setRawKeyword(target.value);
        }}
        onBlur={() => setActive(false)}
        onFocus={() => setActive(true)}
      />
      {hasFilter && (
        <S.Filter
          onClick={() => setIsFilterActive(!isFilterActive)}
          src={
            filter.startDate || filter.endDate ? CalendarBlueIcon : CalendarIcon
          }
          alt="filter"
        />
      )}
      {isFilterActive && (
        <S.FilterWrapper isPopup={isPopup}>
          <S.FilterTopWrapper>
            <S.FilterTitle>기간 선택을 선택하세요</S.FilterTitle>
            <S.RefreshButton
              alt="refresh"
              src={RepeatIcon}
              onClick={() => {
                setRawStartDate(undefined);
                setRawEndDate(undefined);
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
                setRawStartDate(startOfDay(startDate as number | Date));
                setRawEndDate(endOfDay(endDate as number | Date));
              }}
              locale={ko}
            />
          </S.DateRangeWrapper>
          <S.FilterApplyButton
            onClick={onClickApply}
            // disabled={filterConfirmDisabled}
          >
            {filterConfirmDisabled
              ? '적용하기'
              : `${format(rawStartDate as TdisplayDate, 'yyyy.MM.dd')}~${format(
                  rawEndDate as TdisplayDate,
                  'MM.dd'
                )} 적용하기`}
          </S.FilterApplyButton>
        </S.FilterWrapper>
      )}
    </S.Wrapper>
  );
};

export default SearchBar;
