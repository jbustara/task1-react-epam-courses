import { configureStore } from '@reduxjs/toolkit';

import authorReducer from './authors/authorSlice';
import courseReducer from './courses/courseSlice';
import userReducer from './user/userSlice';

export const store = configureStore({
	reducer: {
		authors: authorReducer,
		courses: courseReducer,
		user: userReducer,
	},
});
