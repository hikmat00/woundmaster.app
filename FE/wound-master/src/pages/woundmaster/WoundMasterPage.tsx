import {Link, NavLink} from "react-router-dom";
import {IfLogged} from "@/shared/";

export function WoundMasterPage() {
    return(
        <div>
            <h1 className="title">WoundMaster</h1>
            <div>
                <h1 className="font-extrabold my-3 text-[3rem] text-center">Area riservata agli operatori autorizzati</h1>
                <h1 className="font-extralight my-3  text-2xl text-center mb-16">Area riservata esclusivamenti agli Operatori per la gestione delle attività</h1>
                <hr/>
                <div className="my-9 flex items-center justify-center gap-20 ">
                    <Link to="https://www.contravulnera.org">
                        <button className="btn primary">ContraVulnera</button>
                    </Link>
                    <IfLogged else={
                        <NavLink to= "/login" className="btn hover:bg-sky-700">Login</NavLink>
                    }>
                        <NavLink to= "/login" className="btn hover:bg-sky-700">Dashboard</NavLink>
                    </IfLogged>

                </div>

            </div>

        </div>
    )
}