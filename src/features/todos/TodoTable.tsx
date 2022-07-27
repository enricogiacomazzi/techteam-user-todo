import React from "react";
import {useQuery} from '@tanstack/react-query';
import { User } from "../../models/user";
import { getTodosByUserId } from "../../api/todos";
import './table.css';
import { Todo } from "../../models/todo";

interface TodoTableProps {
    user: User;
}

export const TodoTable: React.FC<TodoTableProps> = ({user}) => {
    const {data, isLoading} = useQuery(['todos', user.id], () => getTodosByUserId(user.id))

    if(isLoading) {
        return <div></div>
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                    <th>User</th>
                </tr>
            </thead>
            <tbody>
                {data?.map(r => <Row key={r.id} todo={r} user={user}/>)}
            </tbody>
        
      </table>
    )
}

const Row:React.FC<{todo: Todo, user: User}> = ({todo, user}) => (
    <tr>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td>{todo.completed ? 'X' : ''}</td>
        <td>{user.name}</td>
    </tr>
)