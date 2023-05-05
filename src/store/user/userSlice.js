import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		saveUser: (state, { payload }) => {
			state.isAuth = true;
			state.name = payload.user.name;
			state.email = payload.user.email;
			state.token = payload.result;
		},
		logout: (state) => {
			state.isAuth = false;
			state.name = '';
			state.email = '';
			state.token = '';
		},
	},
});
export const { saveUser, logout } = userSlice.actions;
export default userSlice.reducer;
