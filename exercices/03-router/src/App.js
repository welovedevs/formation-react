import './App.css';
import { Link, Outlet } from 'react-router-dom';

const App = () => (
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
);

export default App;
