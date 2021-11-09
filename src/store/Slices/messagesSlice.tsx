import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IMessagesState {
  messages: [];
}

const initialState: IMessagesState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    addMessage(state, payload: PayloadAction<[]>) {
      state.messages = payload.payload;
    },
  },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
