import {NavLink, Outlet} from "react-router-dom";

const isActive = (obj: {isActive: boolean}) => {
    return obj.isActive ? 'btn primary' : 'btn'
}
export function CMSPage() {
    return (
        <div>
            <div className="flex justify-center gap-20 my-3 mb-10">
                <NavLink to="/cms/operatori" className={isActive}>Operatori</NavLink>
                <NavLink to="/cms/pazienti" className={isActive}>Pazienti</NavLink>
                <NavLink to="/cms/visite" className={isActive}>Visite</NavLink>
            </div>
            <hr/>

            <Outlet />
        </div>
    )
}
