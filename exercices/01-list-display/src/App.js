import './App.css';
import { List } from './components/list/list';
import { AppContext } from './context/app_context';
import { useState } from 'react';
import rawList from './components/list/data.json';
import { ListRecap } from './components/list_recap/list_recap';

function App() {
    const [list, setList] = useState(rawList);
    return (
        <AppContext.Provider value={{ list, setList }}>
            <div className="App">
                <header className="App-header">
                    <h1>Ma super Liste</h1>
                </header>
                <main>
                    <List />
                    <ListRecap />
                </main>
            </div>
        </AppContext.Provider>
    );
}

export default App;
