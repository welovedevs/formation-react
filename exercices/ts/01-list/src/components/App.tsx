import React, { useState } from 'react';
import style from './App.module.css';
import { UserList } from './list/list';
import rawList from './data.json';
import { ListUser } from '../types/users';
import { UserForm } from './form/form';

function App() {
    const [list, setList] = useState<Array<ListUser>>(rawList as Array<ListUser>);

    return (
        <div className="App">
            <header className={style.header}>WeLoveDevs.com Users List</header>
            <main>
                <UserForm onAdd={(newUser: ListUser) => setList([...list, newUser])} />
                <UserList
                    userList={list}
                    onDelete={(nameToDelete: string) => {
                        setList(list.filter(({ name }) => nameToDelete !== name));
                    }}
                />
            </main>
        </div>
    );
}

export default App;
