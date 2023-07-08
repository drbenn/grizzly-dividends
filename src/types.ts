// https://www.youtube.com/watch?v=zu-EgnbmcLY
// dont use .d.ts for types file

import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;

export type BookState = {
  id: string;
  title: string | undefined;
  author: string | undefined;
};
