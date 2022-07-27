import axios from "axios";
import { User } from "../models/user";

export const getUsers: () => Promise<User[]> = async () => {
    const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return res.data;
}