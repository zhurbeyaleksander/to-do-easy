import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid"


type ToDo = {
    id: string,
    title: string,
    completed: boolean
}

export interface ITodoList {
    items: ToDo[]
};

const initialState: ITodoList = {
    items: []
};

export const todoReducer = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            // Вот тут проблема, наверное 
            // state.items.push(action.payload);
            // state.items = [...state.items, action.payload]
            const newToDo = {
                id: v4(),
                title: action.payload,
                completed: false
            }
            state.items.push(newToDo)
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        }
    },
});

export const { addTask } = todoReducer.actions;
export const { removeTask } = todoReducer.actions;

export default todoReducer.reducer;