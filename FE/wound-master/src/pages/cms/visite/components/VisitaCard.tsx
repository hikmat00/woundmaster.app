import img from "../../../../assets/fotoVisita.jpg";
import {User} from "@/model/user";

interface VisitCardProps {
    user: Partial<User>;
    editCard: (user: Partial<User>) => void;

}
export function VisitCard(props: VisitCardProps){
    const{ user: u} = props;
    return(
        <div key={u.id}
             className="bg-white rounded-xl overflow-hidden text-black shadow-2xl"
        >
            <img src={img} alt="img" className="h-64 w-full "/>
            <div className="flex justify-between item-center p-3 text-xl font-bold">
                <div>
                    {u.username}
                </div>

                <div>
                    {u.password}
                </div>

            </div>
            <p className="p-3">{u.ruolo}</p>

            <button
                className='bg-sky-600 text-white hover:bg-sky-800 transition w-full text-center font-bold p-3'
                onClick={() => props.editCard(u)}
            >
                EDIT
            </button>



        </div>
    )
}