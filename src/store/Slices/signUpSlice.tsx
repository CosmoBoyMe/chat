import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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

interface FormValues {
  login: string;
  password: string;
  passwordConfirm: string;
  name: string;
  id: number | undefined;
  captcha: string;
}

export const signUpUser = createAsyncThunk('auth/signUpUser', async (values: FormValues, { rejectWithValue }) => {
  try {
    const response = await authRegister(values);
    return response.data;
  } catch (error) {
    const errorMessage = (error as Error).message;
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
  extraReducers: (builder) => {
    builder.addCase(signUpUser.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(signUpUser.fulfilled, (state) => {
      state.errorMessage = '';
      state.fetching = false;
    });
    builder.addCase(signUpUser.rejected, (state, action: any) => {
      state.fetching = false;
      state.errorMessage = action.payload;
    });

    builder.addCase(loadGenders.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(loadGenders.fulfilled, (state, action: any) => {
      state.genders = action.payload;
      state.fetching = false;
    });
    builder.addCase(loadGenders.rejected, (state, action: any) => {
      state.fetching = false;
      state.errorMessage = action.payload;
    });
  },
});

export default signUpSlice.reducer;
