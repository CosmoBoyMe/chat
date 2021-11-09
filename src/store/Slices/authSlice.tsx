import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authLogin } from '../../api';
import { IAuthFormValues } from '../../types';

interface IAuthUserState {
  errorMessage: string;
  isAuth: boolean;
  fetching: boolean;
}

const initialState: IAuthUserState = {
  errorMessage: '',
  isAuth: !!localStorage.getItem('token'),
  fetching: false,
};

export const authUser = createAsyncThunk('auth/authUser', async (values: IAuthFormValues, { rejectWithValue }) => {
  try {
    const response = await authLogin(values);
    return response.data;
  } catch (error) {
    const errorMessage: string = (error as Error).message;
    return rejectWithValue(errorMessage);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authUser.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(authUser.fulfilled, (state, action: PayloadAction<string>) => {
      state.errorMessage = '';
      state.isAuth = true;
      state.fetching = false;
      localStorage.setItem('token', action.payload);
    });
    builder.addCase(authUser.rejected, (state, action: any) => {
      state.fetching = false;
      state.errorMessage = action.payload;
    });
  },
});

export default authSlice.reducer;
