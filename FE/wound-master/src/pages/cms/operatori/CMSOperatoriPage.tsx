import {useEffect, useState} from "react";
import {User} from "@/model/user";
import {getAllUsers} from "@/services/operators/operatos.api";

export function CMSOperatoriPage() {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        loadData()
    }, [])

    function loadData() {
        getAllUsers()
            .then(res => {
                setUsers(res.data);
            })
    }
    console.log(users)
    return (

        <div>
            <h1 className="title">OPERATORI</h1>

            {
                users.map(u => {
                    return (
                        <li key={u.id}>
                            {u.username}
                        </li>
                    )
                })
            }

        </div>

    )
}