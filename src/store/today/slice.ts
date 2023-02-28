import { createSlice } from "@reduxjs/toolkit";

export interface ITodoList {
    items: string[]
};

const initialState: ITodoList = {
    items: []
};

export const todoReducer = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.items = action.payload;
        }
    },
});

export const { addTask } = todoReducer.actions;

export default todoReducer.reducer;