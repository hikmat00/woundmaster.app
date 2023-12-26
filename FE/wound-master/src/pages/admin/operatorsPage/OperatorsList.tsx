import clsx from "clsx";
import {User} from "@/model/user";

interface OperatorsListProps{
    items: User[];
    activeItem: Partial<User> | null;
    onEditItem: (operator: Partial<User>) => void;
    onDeleteItem: (id:number) => void;

}
export function OperatorsList(props: OperatorsListProps){
     return (
         <div className="mt2">
             <table className="table-auto w-full hover">
                 <thead>
                 <tr className="text-violet-800">
                     <th>ID</th>
                     <th>USERNAME</th>
                     <th>RUOLO</th>
                 </tr>
                 </thead>

                 <tbody>
                 {
                     props.items.map(item => {
                         return (
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
                                 <td className="text-center t">{item.id}</td>
                                 <td className="text-center">{item.username}</td>
                                 <td className="text-center">{item.ruolo}</td>
                                 <td className="text-center">
                                     <i
                                         className=" fa fa-trash text-red-500"
                                         onClick={(e) => {
                                             e.stopPropagation()
                                             props.onDeleteItem(item.id)
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