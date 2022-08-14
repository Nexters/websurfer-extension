import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@redux/store';

export type ModalType = 'mostVisit' | 'totalTime' | 'frequency'; //가장 많이 방문, 총 시간, 자주 이용하는 시간

interface CommonState {
  modal: {
    isOpenModal: boolean;
    isModalType: ModalType;
  };
}

const initialState: CommonState = {
  modal: {
    isOpenModal: false,
    isModalType: 'mostVisit',
  },
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
  },
});

export const modalSelector = (state: RootState) => state.common.modal;

export const { closeModal, openModal } = commonSlice.actions;

export default commonSlice.reducer;
