import React, { useCallback, useState } from 'react';
import style from './App.module.css';
import { UserList } from './list/list';
import rawList from './data.json';
import { ListUser } from '../types/users';
import { Link, Outlet } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { UsersContext } from '../context/users_context';

const HomeRender = () => {
    return <h1>Accueil</h1>;
};
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
        <UsersContext.Provider value={{ users: list, onAdd, onDelete }}>
            <div className="App">
                <header className={style.header}>WeLoveDevs.com Users List</header>
                <nav className={style.nav}>
                    <Link to="/">
                        <b>Home</b>
                    </Link>
                    <Link to="/form">Add a user</Link>
                    <Link to="/users">List Users</Link>
                </nav>
                <main>
                    <Routes>
                        <Route path="/users" element={<h1>Liste Users</h1>} />
                        <Route path="/" element={<HomeRender />} />
                    </Routes>
                    <Outlet />
                </main>
            </div>
        </UsersContext.Provider>
    );
}

export default App;
