import React, {useCallback, useReducer, useState} from 'react';
import style from './App.module.css';
import { UserList } from './list/list';
import rawList from './data.json';
import { ListUser } from '../types/users';
import { Link, Outlet } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { UsersContext } from '../store/users/users_context';
import {usersReducer} from "../store/users/users_reducer";

const HomeRender = () => {
    return <h1>Accueil</h1>;
};
function App() {
    const userReducer = useReducer(usersReducer,{users : rawList})

    return (
        <UsersContext.Provider value={{ userReducer }}>
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
