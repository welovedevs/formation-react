import React, { useCallback, useState } from 'react';
import style from './App.module.css';
import { UserList } from './list/list';
import rawList from './data.json';
import { ListUser } from '../types/users';
import { UserForm } from './form/form';
import { UsersContext } from './context/users_context';

function App() {
    const [list, setList] = useState<Array<ListUser>>(rawList as Array<ListUser>);

    const onDelete = useCallback(
        (nameToDelete: string) => {
            setList(list.filter(({ name }) => nameToDelete !== name));
        },
        [list]
    );

    const onAdd = useCallback((newUser: ListUser) => setList([...list, newUser]), [list]);
    return (
        <UsersContext.Provider value={{ users: list }}>
            <div className="App">
                <header className={style.header}>WeLoveDevs.com Users List</header>
                <main>
                    <UserForm onAdd={onAdd} />
                    <UserList onDelete={onDelete} />
                </main>
            </div>
        </UsersContext.Provider>
    );
}

export default App;
