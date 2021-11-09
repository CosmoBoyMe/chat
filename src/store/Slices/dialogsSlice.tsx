import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IDialog {
  name: string;
  gender: 'male' | 'female';
}

interface IDialogsState {
  dialogs: IDialog[] | null;
  selectedDialog: null | IDialog;
}

const initialState: IDialogsState = {
  dialogs: null,
  selectedDialog: null,
};

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    setDialogs(state, action: PayloadAction<IDialog[]>) {
      state.dialogs = action.payload;
    },
    setSelectedDialog(state, action: PayloadAction<IDialog | null>) {
      state.selectedDialog = action.payload;
    },
  },
});

export const { setDialogs, setSelectedDialog } = dialogsSlice.actions;
export default dialogsSlice.reducer;
