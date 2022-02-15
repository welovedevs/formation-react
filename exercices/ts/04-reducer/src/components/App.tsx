import React from 'react';
import style from './App.module.css';
import { Link, Outlet } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { UsersProvider } from '../store/users/users_reducer_provider';

const HomeRender = () => {
    return <h1>Accueil</h1>;
};
function App() {
    return (
        <UsersProvider>
            <div className="App">
                <header className={style.header}>WeLoveDevs.com Users List</header>
                <nav className={style.nav}>
                    <Link to="/">
                        <b>Home</b>
                    </Link>
                    <Link to="/form">Add a user</Link>
                    <Link to="/users">List Users</Link>
                </nav>
                <main className={style.mainContainer}>
                    <Routes>
                        <Route path="/users" element={<h1>Liste Users</h1>} />
                        <Route path="/" element={<HomeRender />} />
                    </Routes>
                    <Outlet />
                </main>
            </div>
        </UsersProvider>
    );
}

export default App;
