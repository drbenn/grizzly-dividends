import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CalcState {
  firstValue: number;
  secondValue: number;
  total?: number;
}

export const initialState: CalcState = {
  firstValue: 0,
  secondValue: 0,
  total: 0
};

export const calcSlice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    addition: (state, action: PayloadAction<CalcState>) => {
      state.total = action.payload.firstValue + action.payload.secondValue;
    },
    subtraction: (state, action: PayloadAction<CalcState>) => {
      state.total = action.payload.firstValue - action.payload.secondValue;
    },
    multiplication: (state, action: PayloadAction<CalcState>) => {
      state.total = action.payload.firstValue * action.payload.secondValue;
    },
    division: (state, action: PayloadAction<CalcState>) => {
      state.total = action.payload.firstValue / action.payload.secondValue;
    }
  }
});

export const {
  addition,
  division,
  multiplication,
  subtraction
} = calcSlice.actions;

export default calcSlice.reducer;