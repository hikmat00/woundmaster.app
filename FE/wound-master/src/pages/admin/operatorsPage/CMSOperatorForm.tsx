import {User} from "@/model/user";
import clsx from "clsx";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";

export interface CMSOperatorFormProps {
    activeItem: Partial<User> | null;
    onCLose: () => void;
    onAdd: (operator: Partial<User>) =>void;
    onEdit: (operator: Partial<User>) =>void;
}

const initialState: Partial<User> = {
    username: '', ruolo: '', password:''
}


export function CMSOperatorForm(props: CMSOperatorFormProps) {
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        console.log(props.activeItem)
        if(props.activeItem?.id){
            setFormData({ ...props.activeItem})
        }else {
            setFormData(initialState)
        }
        },[props.activeItem])

    function changeHandler(e: ChangeEvent<HTMLInputElement>) {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setFormData(s => ({ ...s, [name]: value}))
    }

    function saveHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(props.activeItem?.id){
            //EDIT
            props.onEdit(formData);
        }else {
            props.onAdd(formData);
        }

        console.log(formData);
    }

    const isUsernameValid = formData.username?.length;
    const isValid = isUsernameValid;


    return (
        <div className={clsx(
            "fixed bg-indigo-500 z-10 shadow-2xl text-black w-4/5 top-0  h-full transition-all",
            {'right-0': props.activeItem, 'left-full': !props.activeItem}
        )}>

            <form onSubmit={saveHandler}>
                <div className="flex justify-around h-16 my-3">
                    <button
                        className=" btn primary "
                        onClick={props.onCLose}
                        type="button"
                    >X
                    </button>

                    <button
                        className=" btn success w-4/5 disabled:opacity-90"
                        disabled={!isValid}
                        type="submit"
                    >SAVE
                    </button>
                </div>

                <div className="flex flex-col gap-4 mx-3 mt-16 font-extrabold">

                    Username:
                    <input
                        className={clsx({'error': !isUsernameValid},
                            'font-medium'
                        )}
                        type='text' value={formData?.username} name="username" onChange={changeHandler}
                    />
                    {props.activeItem?.id && (
                        <>
                            Ruolo:
                            <input
                                className={clsx({'error': !isUsernameValid},
                                    'font-medium'
                                )}
                                type='text' value={formData?.ruolo} name="ruolo" onChange={changeHandler}
                            />

                        </>
                    )}

                    {!props.activeItem?.id && (
                        <>
                            Password:
                            <input
                                className={clsx({'error': !isUsernameValid},
                                    'font-medium'
                                )}
                                type='text' value={formData?.password} name="password" onChange={changeHandler}
                            />

                        </>
                    )}


                </div>

            </form>


            {
                props.activeItem?.username
            }

        </div>
    )
}