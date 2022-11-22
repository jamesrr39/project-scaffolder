import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state: CounterState, action: PayloadAction<{ amount: number }>) => {
      return {
        ...state,
        count: state.count + action.payload.amount,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = counterSlice.actions;

export default counterSlice.reducer;
