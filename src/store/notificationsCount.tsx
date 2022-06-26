import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface NotificationsCountState {
  notificationsCount?: number;
}

const initialState = {notificationsCount: undefined} as NotificationsCountState;

export const userSlice = createSlice({
  name: 'notificationsCount',
  initialState,
  reducers: {
    setNotificationsCount(state, action: PayloadAction<number>) {
      state.notificationsCount = action.payload;
    },
    removeNotificationsCount(state) {
      state.notificationsCount = undefined;
    },
  },
});

export const {setNotificationsCount, removeNotificationsCount} =
  userSlice.actions;

export default userSlice.reducer;
