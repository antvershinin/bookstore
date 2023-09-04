import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface IUser {
  email?: string;
  name?: string;
  avatar_url?: string;
}

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = {};
      state.user.email = action.payload;
      console.log('STATE', state.user);
    },
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
