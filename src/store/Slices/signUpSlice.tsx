import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { authRegister, getGenders } from '../../api';

interface ISignUpState {
  errorMessage: string;
  genders: [] | IGenders[];
  fetching: boolean;
}

interface IGenders {
  id: number;
  gender: string;
}

const initialState: ISignUpState = {
  errorMessage: '',
  genders: [],
  fetching: false,
};

interface IFormValues {
  login: string;
  password: string;
  passwordConfirm: string;
  name: string;
  id: number;
  captcha: string;
}

export const signUpUser = createAsyncThunk('auth/signUpUser', async (values: IFormValues, { rejectWithValue }) => {
  try {
    const response = await authRegister(values);
    return response.data;
  } catch (error: any) {
    const errorMessage: string = error.response.data;
    return rejectWithValue(errorMessage);
  }
});

export const loadGenders = createAsyncThunk('signUp/loadGenders', async (_, { rejectWithValue }) => {
  try {
    const response = await getGenders();
    const { genders }: { genders: IGenders[] } = response.data;
    return genders;
  } catch (error) {
    const errorMessage = (error as Error).message;
    return rejectWithValue(errorMessage);
  }
});

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {},
  extraReducers: {
    [signUpUser.pending.type]: (state) => {
      state.fetching = true;
    },
    [signUpUser.fulfilled.type]: (state) => {
      state.errorMessage = '';
      state.fetching = false;
    },
    [signUpUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.fetching = false;
      state.errorMessage = action.payload;
    },

    [loadGenders.pending.type]: (state) => {
      state.fetching = true;
    },
    [loadGenders.fulfilled.type]: (state, action: PayloadAction<IGenders[]>) => {
      state.genders = action.payload;
      state.fetching = false;
    },
    [loadGenders.rejected.type]: (state, action: PayloadAction<string>) => {
      state.fetching = false;
      state.errorMessage = action.payload;
    },
  },
});

const signUpSelect = {
  all: (state: RootState) => state.signUp,
  errorMessage: (state: RootState) => state.signUp,
  genders: (state: RootState) => state.signUp,
  fetching: (state: RootState) => state.signUp.fetching,
};

export { signUpSelect };
export default signUpSlice.reducer;
