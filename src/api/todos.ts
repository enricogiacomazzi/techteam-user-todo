import axios from "axios";
import { Todo } from "../models/todo";



export const getTodosByUserId = async (id: number) => {
    const res = await axios.get<Todo[]>(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
    return res.data;
}