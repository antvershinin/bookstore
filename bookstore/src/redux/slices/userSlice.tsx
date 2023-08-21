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
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
