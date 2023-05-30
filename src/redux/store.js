import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './quizSlice';

const store = configureStore({ reducer });

export default store;
