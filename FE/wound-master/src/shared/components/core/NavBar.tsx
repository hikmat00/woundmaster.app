import {NavLink, useNavigate} from "react-router-dom";
import logo from '../../../assets/logoCV.png';
import {selectAuthIsLogged, useAuth} from "@/services/auth";
import {IfLogged} from "../auth/IfLogged";

export function NavBar() {
    const navigate = useNavigate();
    const logout = useAuth(state => state.logout);

    function logoutHandler() {
        logout();

        navigate('/login');
    }

    return (
        <div
            className='fixed top-0 left-0 right-0 z-10  shadow-2xl bg-gradient-to-tl from-violet-900 bg-fixed to-blue-500'>
            <div className=' flex justify-between items-center h-20 p-3'>

                <div className="flex items-center gap-3">
                    <img src={logo} alt="logo" className="w-16 "/>
                    <NavLink to="woundmaster"
                             className=" text-slate-950 font-extrabold text-2xl hover:text-3xl">WoundMaster</NavLink>

                </div>
                <div className="flex items-center gap-20">
                    <IfLogged else={
                        <NavLink to="login" className="btn hover:bg-sky-700">Login</NavLink>
                    }>
                        <NavLink to="logout" onClick={logoutHandler} className="btn hover:bg-sky-700">Logout</NavLink>
                    </IfLogged>


                </div>

            </div>
        </div>
    )
}