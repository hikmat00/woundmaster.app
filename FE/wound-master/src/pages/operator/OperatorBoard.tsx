import {NavLink, Outlet} from "react-router-dom";

const isActive = (obj: {isActive: boolean}) => {
    return obj.isActive ? 'btn primary' : 'btn'
}
export function OperatorBoard() {
    return (
        <div>
            <h1 className="title text-white">Operator-Board</h1>
            <div className="flex justify-center gap-20 my-3 mb-10">
                <NavLink to="/operator-board/patients" className={isActive}>Pazienti</NavLink>
                <NavLink to="/operator-board/visits" className={isActive}>Visite</NavLink>

            </div>
            <hr/>

            <Outlet />
        </div>
    )
}