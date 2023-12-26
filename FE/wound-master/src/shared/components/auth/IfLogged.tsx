// IfLogged.tsx
import {PropsWithChildren, ReactNode} from "react";
import {selectAuthIsLogged, useAuth} from "@/services/auth";

interface IsLoggedProps {
    else?:ReactNode;

}
export function IfLogged(props: PropsWithChildren<IsLoggedProps>) {
    const isLogged = useAuth(selectAuthIsLogged);

    return (
        <>
            {
                isLogged ? props.children : props.else
            }
        </>
    )
}
