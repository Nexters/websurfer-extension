import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@redux/store';

interface CommonState {
  isOpenModal: boolean;
}

const initialState: CommonState = {
  isOpenModal: true,
};

export const commonSlice = createSlice({
  name: 'common',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    closeModal: (state) => {
      state.isOpenModal = false;
    },
    openModal: (state) => {
      state.isOpenModal = true;
    },
  },
});

export const { closeModal, openModal } = commonSlice.actions;

export default commonSlice.reducer;
