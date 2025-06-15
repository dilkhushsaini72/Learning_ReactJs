import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    dataOfForm: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { dataOfForm } = userSlice.actions;
export default userSlice.reducer;
