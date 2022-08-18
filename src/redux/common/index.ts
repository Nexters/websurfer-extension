import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@redux/store';

export type ModalType = 'mostVisit' | 'totalTime' | 'frequency'; //가장 많이 방문, 총 시간, 자주 이용하는 시간

interface CommonState {
  modal: {
    isOpenModal: boolean;
    isModalType: ModalType;
  };
  data: { hasLastWeekData: boolean };
  isFilterOnceApplied: boolean;
}

const initialState: CommonState = {
  modal: {
    isOpenModal: false,
    isModalType: 'mostVisit',
  },
  data: {
    hasLastWeekData: false,
  },
  isFilterOnceApplied: false,
};

export const commonSlice = createSlice({
  name: 'common',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    closeModal: (state) => {
      state.modal.isOpenModal = false;
    },
    openModal: (state, action: PayloadAction<ModalType>) => {
      state.modal.isModalType = action.payload;
      state.modal.isOpenModal = true;
    },
    setIsFilterOnceApplied(state, { payload }) {
      state.isFilterOnceApplied = payload;
    },
    setHasLastWeekData(state, action: PayloadAction<boolean>) {
      state.data.hasLastWeekData = action.payload;
    },
  },
});

export const filterOnceAppliedSelector = (state: RootState) =>
  state.common.isFilterOnceApplied;

export const modalSelector = (state: RootState) => state.common.modal;
export const hasLastWeekDataSelector = (state: RootState) =>
  state.common.data.hasLastWeekData;

export const {
  closeModal,
  openModal,
  setIsFilterOnceApplied,
  setHasLastWeekData,
} = commonSlice.actions;

export default commonSlice.reducer;
