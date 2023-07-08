import { configureStore } from '@reduxjs/toolkit';
import calcReducer from './calcSlice';

export const store = configureStore({
  reducer: {
    calc: calcReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;