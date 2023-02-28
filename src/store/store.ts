import todoReducer from './today/slice';
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = <T = AppDispatch>(): T => useDispatch<any>();