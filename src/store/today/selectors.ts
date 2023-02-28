import { createSelector } from 'reselect';
import { RootState } from '../store';

export const todaySelector = createSelector(
    (state: RootState) => state.todos,
    (todos: RootState['todos']) => todos
);
