## Routing

React est opinion-free

React est très "Single Page App" (SPA)

On ne peut pas créer une appli moderne sur une route

---

## Librairies

-   react-router
-   navi
-   curi
-   reach
-   ...

---

## Routeur Obligatoire?

Non.

---

## react-router obligatoire?

Non, mais faut bidouiller

[https://blog.logrocket.com/how-react-hooks-can-replace-react-router](https://blog.logrocket.com/how-react-hooks-can-replace-react-router/)

---

## react-router rapidement

-   Router
-   Link
-   Route
-   Outlet
-   Switch

---

## Router

index.js

```javascript
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
```

---

## Link

App.js

```javascript
import { Link } from 'react-router-dom';

const App = () => (
    <div className="App">
        <header className="App-header">
            <h1>Ma super Liste</h1>
        </header>
        <nav>
            <Link to="/list">Liste</Link>
            <Link to="/form">Ajouter un utilisateur</Link>
        </nav>
    </div>
);
```

---

## Route

App.js

```jsx
import { Link, Routes, Route } from 'react-router-dom';

const App = () => (
    <div className="App">
        <header />
        <nav />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path="/form" element={<AddUserForm />} />
            </Routes>
        </main>
    </div>
);
```

---

## Outlet

index.js

```javascript
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/users" element={<List />} />
                    <Route path="/form" element={<AddUserForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
```

---

## Outlet

App.js

```jsx
import { Link, Routes, Route } from 'react-router-dom';

const App = () => (
    <div className="App">
        <header />
        <nav />
        <main>
            <Outlet />
        </main>
    </div>
);
```

---

## Page User

list_recap.jsx

```jsx
export const ListDisplay = ({ list, onDelete }) => {
    return (
        <div className="items-container">
            {list.map(({ name, age, department }, index) => (
                <Link to={`/users/${name}`} key={`list_item_${name}`}>
                    <!-- -->
                </Link>
            ))}
        </div>
    );
};
```

Page blanche !

---

## Route par défaut

index.js

```javascript
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/users" element={<List />} />
                    <Route path="/form" element={<AddUserForm />} />
                    <Route path="*" element={<div>404!</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
```

---

## Paramètres route

index.js

```javascript
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/users" element={<List />}>
                        <Route path=":id" element={<User_page />} />
                    </Route>
                    <Route path="/form" element={<AddUserForm />} />
                    <Route path="*" element={<div>404!</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
```

Il faut ajouter `<Outlet/>` dans _list.jsx_

---

# useParams

```jsx
import { useParams } from 'react-router';

export const User_page = () => {
    const params = useParams();

    return <div>{params.id}</div>;
};
```

---

Hands on

React router 

* Implémenter une route pour le formulaire
* Implémenter un Outlet pour afficher un composant en fonction de la route

[Lien Sandbox 3](https://codesandbox.io/s/1-correction-partie-1-hp792)