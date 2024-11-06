import {configurestore} from '@reduxjs/toolkit';
import todoReducers from '../features/todo/todoSlice';

export const store = configurestore({
    reducer: todoReducer
})