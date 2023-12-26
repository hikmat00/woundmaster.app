import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import {User} from "@/model/user";
import {VisitCard} from "./components/VisitaCard";
import {ServerError, Spinner } from "@/shared/";
import {getAllUsers} from "@/services/operators/operatos.api";


export function Visits() {
    const [users, setUsers] = useState<User[]>([]);
    const [pending, setPending] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        loadData()
    }, [])

    function loadData() {
        setError(false);
        setPending(true)
        getAllUsers()
            .then(res => {
                setUsers(res.data);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setPending(false)
            })
    }

    function editCard(user: Partial<User>) {
        console.log(user)
    }

    return (

        <div>

            <div className="mb-8">
                <h1 className="title">Visite</h1>

                {pending || !error && <button className="btn add ">Add New</button>}

            </div>
            {pending && <Spinner/>}
            {error && <ServerError/>}
            <div className="grid grid-cols1 sm:grid-cols-2 gap-16">

                {
                    users.map(u => {
                        return (
                            <VisitCard
                                key={u.id}
                                user={u}
                                editCard={editCard}

                            />
                        )
                    })
                }

            </div>


        </div>

    )
}