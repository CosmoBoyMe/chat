import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { authLogin } from '../../api';
import { IAuthFormValues } from '../../interfaces';

interface IAuthUserState {
  errorMessage: string;
  isAuth: boolean;
  userLogin: null | string;
  fetching: boolean;
}

const initialState: IAuthUserState = {
  errorMessage: '',
  isAuth: !!localStorage.getItem('token'),
  userLogin: localStorage.getItem('login'),
  fetching: false,
};

export const authUser = createAsyncThunk('auth/authUser', async (values: IAuthFormValues, { rejectWithValue }) => {
  try {
    const response = await authLogin(values);
    const { login } = values;
    return { token: response.data, login };
  } catch (error: any) {
    const errorMessage: string = error.response.data;
    return rejectWithValue(errorMessage);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [authUser.pending.type]: (state) => {
      state.fetching = true;
    },
    [authUser.fulfilled.type]: (state, action: PayloadAction<{ token: string; login: string }>) => {
      state.errorMessage = '';
      state.isAuth = true;
      state.fetching = false;
      state.userLogin = action.payload.login;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('login', action.payload.login);
    },

    [authUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.fetching = false;
      state.errorMessage = action.payload;
    },
  },
});

const authSelect = {
  all: (state: RootState) => state.auth,
  userLogin: (state: RootState) => state.auth.userLogin,
  erorMessage: (state: RootState) => state.auth.errorMessage,
  isAuth: (state: RootState) => state.auth.isAuth,
  fetching: (state: RootState) => state.auth.fetching,
};

export { authSelect };

export default authSlice.reducer;
