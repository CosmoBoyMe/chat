import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postFile } from '../../api/index';
import { ISelectedFile } from '../../interfaces';
import { BASE_URL_API } from '../../const';
import { RootState } from '..';

interface IDataMessage {
  senderLogin: string;
  message: string;
  dialogsId: number;
  file: ISelectedFile | null;
}

interface IMessagesState {
  messages: any;
  currentMessage: string;
  selectedFile: ISelectedFile | null;
  fetchingFile: boolean;
  fileErrorMessage: string;
}

const initialState: IMessagesState = {
  messages: {},
  currentMessage: '',
  selectedFile: null,
  fetchingFile: false,
  fileErrorMessage: '',
};

const setSelectedFile = createAsyncThunk('dialogs/sendFile', async (file: File, { rejectWithValue }) => {
  try {
    const response = await postFile(file);

    const { name, type, size } = file;
    const fileUrl = response.data;
    const buildedFileUrl = BASE_URL_API + fileUrl;

    const selectedFile = { name, type, size, fileUrl: buildedFileUrl };
    return selectedFile;
  } catch (error: any) {
    const errorMessage: string = error.response.data;
    return rejectWithValue(errorMessage);
  }
});

const messagesSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<IDataMessage>) {
      const { senderLogin, message, dialogsId, file } = action.payload;
      if (state.messages[dialogsId]) {
        state.messages[dialogsId].push({ senderLogin, message, file });
      } else {
        state.messages[dialogsId] = [{ senderLogin, message, file }];
      }
    },
    setSelectedFile(state, action) {
      state.selectedFile = action.payload;
    },
    setFileErrorMessage(state, action: PayloadAction<string>) {
      state.fileErrorMessage = action.payload;
    },
    removeSelectedFile(state) {
      state.selectedFile = null;
    },
    setCurrentMessage(state, action: PayloadAction<string>) {
      state.currentMessage = action.payload;
    },
  },
  extraReducers: {
    [setSelectedFile.pending.type]: (state) => {
      state.fetchingFile = true;
    },
    [setSelectedFile.fulfilled.type]: (state, action: PayloadAction<ISelectedFile>) => {
      state.selectedFile = action.payload;
      state.fetchingFile = false;
    },
    [setSelectedFile.rejected.type]: (state, action: PayloadAction<string>) => {
      state.fileErrorMessage = action.payload;
      state.fetchingFile = false;
    },
  },
});

const messagesSelect = {
  all: (state: RootState) => state.messages,
  messages: (state: RootState) => state.messages.messages,
  currentMessage: (state: RootState) => state.messages.currentMessage,
  selectedFile: (state: RootState) => state.messages.selectedFile,
  fetchingFile: (state: RootState) => state.messages.fetchingFile,
  fileErrorMessage: (state: RootState) => state.messages.fileErrorMessage,
};

export { setSelectedFile, messagesSelect };
export const { addMessage, setCurrentMessage, setFileErrorMessage, removeSelectedFile } = messagesSlice.actions;
export default messagesSlice.reducer;
