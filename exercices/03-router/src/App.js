import './App.css';
import { List } from './components/list/list';
import { AppContext } from './context/app_context';
import { useState } from 'react';
import rawList from './components/list/data.json';
import { Link, Outlet } from 'react-router-dom';

function App() {
    const [list, setList] = useState(rawList);
    return (
        <AppContext.Provider value={{ list, setList }}>
            <div className="App">
                <header className="App-header">
                    <h1>Ma super Liste</h1>
                </header>
                <nav>
                    <Link to="/users">Liste</Link>
                    <Link to="/form">Ajouter un utilisateur</Link>
                </nav>
                <main>
                    <Outlet />
                </main>
            </div>
        </AppContext.Provider>
    );
}

export default App;
