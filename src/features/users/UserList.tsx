import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../api/users";
import { User } from "../../models/user";

interface UserListProps {
    selectedUser: User | undefined;
    userChange: (user: User | undefined) => void
}



export const UserList:React.FC<UserListProps> = ({selectedUser, userChange}) => {
    const {data, isLoading} = useQuery(['users'], () => getUsers());
    

    const setValue = (id: string) => {
        const user = data?.find(u => u.id === parseInt(id, 10));
        userChange(user);
    }

    useEffect(() => {
        if(!!data) {
            const user = data[0];
            userChange(user);
        }
    }, [data]);

    if(isLoading) {
        return <div></div>
    }

    return (
        <select value={selectedUser?.id} onChange={e => setValue(e.target.value)}>
            {data?.map(({id, name}) => <option key={id} value={id}>{name}</option>)}
        </select>
    )
}