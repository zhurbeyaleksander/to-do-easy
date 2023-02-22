import { Link } from "react-router-dom"
import { Kanban, Settings, TodayList } from "../../pages"

export const Header = () =>{
    return(
        <div>
            <Link to= '/todayList'><TodayList/></Link>
            <Link to= '/kanban' ><Kanban/></Link>
            <Link to= '/settings' ><Settings/></Link>
        </div>
    )
   
}