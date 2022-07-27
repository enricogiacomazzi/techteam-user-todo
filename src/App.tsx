import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { UserList } from './features/users/UserList';
import { User } from './models/user';
import { TodoTable } from './features/todos/TodoTable';

const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

  return (
    <>
      <UserList selectedUser={selectedUser} userChange={setSelectedUser}/>
      <div style={{height: '30px'}}></div>
      {selectedUser && <TodoTable user={selectedUser}/>}
    </>
  )
}

export default App;
