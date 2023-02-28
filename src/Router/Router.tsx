import { Routes, Route } from 'react-router-dom';
import { Kanban, Settings, TodayList } from '../pages';

export const Router = () => {
    return (
        <Routes>
            <Route path="/todayList" element={<TodayList />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/" element={<TodayList />} />
        </Routes>
    );
};
