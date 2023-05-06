import { createSlice } from '@reduxjs/toolkit';
import { serverLogout, getActualUser } from '../../services';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getActualUser.fulfilled, (state, { payload }) => {
				if (!payload.successful) {
					//token expired
					localStorage.removeItem('token');
				} else {
					state.isAuth = true;
					state.name = payload.result.name;
					state.email = payload.result.email;
					state.token = localStorage.getItem('token');
					state.role = payload.result.role;
				}
			})
			.addCase(serverLogout.fulfilled, (state, action) => {
				state.isAuth = false;
				state.name = '';
				state.email = '';
				state.token = '';
				state.role = '';
				state.token = localStorage.removeItem('token');
			});
	},
});
export default userSlice.reducer;
