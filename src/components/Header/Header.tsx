import { Link } from "react-router-dom"
import { Kanban, Settings, TodayList } from "../../pages"

export const Header = () => {
    return (
        <div>
            <Link to='/todayList'>ToDo list</Link>
            <Link to='/kanban' >KanBan</Link>
            <Link to='/settings' >Setting</Link>
        </div>
    )
}