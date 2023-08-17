import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type UserType = {
  email: string;
  name: string;
};

const initialState = {
  user: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  // extraReducers:(builder) => {
  //   builder.addCase()
  // },
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
