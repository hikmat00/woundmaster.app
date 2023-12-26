import {User} from "@/model/user";

export interface Patient{
    id: number;
    username: string;
    genre: string;
    dataNascita: string;
    dataRegistrazione: string;
    user: User | null
}