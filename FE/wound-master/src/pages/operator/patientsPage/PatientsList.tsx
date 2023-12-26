import clsx from "clsx";
import {Patient} from "@/model/patient";

interface PatientsListProps{
    items: Patient[];
    activeItem: Partial<Patient> | null;
    onEditItem: (patient: Partial<Patient>) => void;
    onDeleteItem: (id:number) => void;
}

export function PatientList(props: PatientsListProps){

    return (
        <div className="mt-2">
            <table className="table-auto w-full hover">
                <thead>
                <tr className="text-violet-800">
                    <th>USERNAME</th>
                    <th>GENERE</th>
                    <th>NASCITA</th>
                    <th>REGISTRAZIONE</th>
                    <th>FOUNDER</th>

                </tr>
                </thead>

                <tbody>
                {
                    props.items.map(item => {
                        return(
                            <tr
                                key={item.id}
                                className={clsx(
                                    'cursor-pointer',
                                    {'bg-sky-600 text-black pointer-events-none': item.id === props.activeItem?.id}
                                )}
                                onClick={() => {
                                    props.onEditItem(item)
                                }
                                }
                            >
                                <td className="text-center">{item.username}</td>
                                <td className="text-center">{item.genre}</td>
                                <td className="text-center">{item.dataNascita}</td>
                                <td className="text-center">{item.dataRegistrazione}</td>
                                <td className="text-center">{item.user.username}</td>
                                <td className="text-cente flex flex-col gap-3">

                                    <i
                                        className=" fa fa-trash text-red-500 text-4xl hover:text-white"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            props.onDeleteItem(item.id)
                                        }}
                                    />

                                    <i
                                        className=" fa fa-pencil-square-o text-yellow-500 text-4xl hover:text-white "
                                        onClick={(e) => {
                                            props.onEditItem(item)
                                        }}
                                    />
                                </td>
                            </tr>
                        )
                    })
                }

                </tbody>

            </table>

        </div>
    )
}