import { Link } from "react-router-dom"

import './styles.css';

export const Header = () => {
    return (
        <div className="Header">
            <Link to='/todayList'>Today</Link>
            <Link to='/kanban' >KanBan</Link>
            <Link to='/settings' >Setting</Link>
        </div>
    )
}