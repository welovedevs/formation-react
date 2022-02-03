import './App.css';
import {List} from "./components/list/list";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Ma super Liste</h1>
            </header>
            <main>
                <List />
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
