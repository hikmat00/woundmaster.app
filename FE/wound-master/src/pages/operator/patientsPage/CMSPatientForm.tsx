import clsx from "clsx";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Patient} from "@/model/patient";

export interface CMSPatientFormProps {
    activeItem: Partial<Patient> | null;
    onCLose: () => void;
    onAdd: (patient: Partial<Patient>) => void;
    onEdit: (patient: Partial<Patient>) => void;
}

const initialState: Partial<Patient> = {
    username: '', genre: '', dataNascita: '', dataRegistrazione: ''
}


export function CMSPatientForm(props: CMSPatientFormProps) {
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        console.log(props.activeItem)
        if (props.activeItem?.id) {
            setFormData({...props.activeItem})
        } else {
            setFormData(initialState)
        }
    }, [props.activeItem])

    function changeHandler(e: ChangeEvent<HTMLInputElement>) {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        setFormData(s => ({...s, [name]: value}))
    }

    function saveHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (props.activeItem?.id) {
            //EDIT
            props.onEdit(formData);
        } else {
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
                    Genere:
                    <input
                        className={clsx({'error': !isUsernameValid},
                            'font-medium'
                        )}
                        type='text' value={formData?.genre} name="genre" onChange={changeHandler}
                    />

                    DataNascita:
                    <input
                        className={clsx({'error': !isUsernameValid},
                            'font-medium'
                        )}
                        type='date' value={formData?.dataNascita} name="dataNascita" onChange={changeHandler}
                    />

                    {props.activeItem?.id && (
                        <>
                            Data Registrazione:
                            <input
                                className={clsx({'error': !isUsernameValid},
                                    'font-medium'
                                )}
                                type='date' value={formData?.dataRegistrazione} name="ruolo" onChange={changeHandler}
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