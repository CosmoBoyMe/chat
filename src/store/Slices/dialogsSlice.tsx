import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface IDialog {
  name: string;
  gender: 'male' | 'female';
}

interface IDialogsState {
  dialogs: IDialog[] | null;
  selectedDialogId: null | number;
}

const initialState: IDialogsState = {
  dialogs: null,
  selectedDialogId: null,
};

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    setDialogs(state, action: PayloadAction<IDialog[]>) {
      state.dialogs = action.payload;
    },
    setSelectedDialogId(state, action: PayloadAction<number | null>) {
      state.selectedDialogId = action.payload;
    },
  },
});

const dialogsSelect = {
  all: (state: RootState) => state.dialogs,
  dialogs: (state: RootState) => state.dialogs.dialogs,
  selectedDialogId: (state: RootState) => state.dialogs.selectedDialogId,
};

export { dialogsSelect };
export const { setDialogs, setSelectedDialogId } = dialogsSlice.actions;
export default dialogsSlice.reducer;
