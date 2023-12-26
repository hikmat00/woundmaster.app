import logo from '../../assets/logoCV.png';
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {useLogin} from "./hooks/useLogin";
import {selectAuthError, selectAuthIsLogged, selectAuthRuolo, useAuth} from "@/services/auth";
import {ServerError} from "@/shared/";
import {useNavigate} from "react-router-dom";

export function LoginPage() {
    const navigate = useNavigate();

    const  error = useAuth(selectAuthError)
    const  isLogged = useAuth(selectAuthIsLogged);
    const  ruolo = useAuth(selectAuthRuolo);

    const login = useAuth(state => state.login)

    const {formData, isValid, changeHandler} = useLogin();

    useEffect(() => {
        if (isLogged) {
            if (ruolo === "admin") {
                navigate('/admin-board');
            } else {
                navigate('/operator-board');
            }
        }
        // Aggiungi eventuali dipendenze necessarie per useEffect
    }, [isLogged, ruolo, navigate]);

    console.log(isLogged);
    function doLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(formData);
        login(formData.username, formData.password);
    }


    return (
        <div className="page-sm">
            <h1 className="title">LOGIN</h1>
            <hr/>

            {error && <ServerError/>}
            <form className="flex flex-col gap-3 mt-16 shadow-2xl  bg-gradient-to-tl from-slate-500 to-blue-500" onSubmit={doLogin}>
                <div className="flex justify-center">
                    <img src={logo} alt="logo" className="w-16 "/>

                </div>

                <h1 className="mt-10 text-center text-black font-extrabold text-2xl">Sign in to your account</h1>
                <input type="text" placeholder="username" value={formData.username} onChange={changeHandler}
                       name="username" className="rounded-full  font-bold"/>
                <input type="password" placeholder="password" value={formData.password} onChange={changeHandler}
                       name="password" className="rounded-full font-bold"/>
                <button disabled={!isValid} className="btn login">SIGN IN</button>

            </form>

            <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
    )
}

