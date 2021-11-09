import { configureStore } from '@reduxjs/toolkit';
import auth from './Slices/authSlice';
import signUp from './Slices/signUpSlice';
import dialogs from './Slices/dialogsSlice';
import messages from './Slices/messagesSlice';

const reducers = {
  auth,
  signUp,
  dialogs,
  messages,
};

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
