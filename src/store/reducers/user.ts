import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  logged: boolean;
}
export const initialState: UserState = {
  logged: false,
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userReducer.reducer;
