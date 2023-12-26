import {NavLink, Outlet} from "react-router-dom";

const isActive = (obj: {isActive: boolean}) => {
    return obj.isActive ? 'btn primary' : 'btn'
}
export function AdminBoard(){
    return(
        <div>
            <h1 className="title text-white">Admin-Board</h1>
            <div className="flex justify-center gap-20 my-3 mb-10">
                <NavLink to="/admin-board/operators" className={isActive}>Operatori</NavLink>
                <NavLink to="/admin-board/patients" className={isActive}>Pazienti</NavLink>

            </div>
            <hr/>

            <Outlet />
        </div>
    )
}