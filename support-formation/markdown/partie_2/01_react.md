Tout est composant!

![Components everywhere !](https://reactjs.org/static/9381f09e609723a8bb6e4ba1a7713b46/90cbd/thinking-in-react-components.png)

---

### React.Component

Penser en composants

```jsx
const element = (
    <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
);
ReactDOM.render(element, document.getElementById('root'));
```

---

```jsx
const RootElement = () => (
    <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
);
ReactDOM.render(RootElement, document.getElementById('root'));
```

---

Les composants sont des fonctions !

```jsx
const Content = () => {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
};

const RootElement = () => <Content />;

```

![](./assets/partie_2/hello_world_noprops.png)

---

Props

```jsx
const Content = (props) => {
    return (
        <div>
            <h1>Hello, world, {props.name}!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
};

const RootElement = () => <Content name="Clément" />;
```

![](./assets/partie_2/hello_world.png)

---

Props - Destructuring

```jsx
const Content = ({ name }) => {
    return (
        <div>
            <h1>Hello, world, {name}!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
};

const RootElement = () => <Content name="Clément" />;
```

---

Props

-   Immutables
-   "Fonctions pures"

---

Flow de données unidirectionnel

-   La donnée descend
-   Responsabilité unique des (fonctions) composants

---

State

-   Gestion de l'état dans les composants
-   Doit être modifié avec les setters
-   (Peut être) Asynchrone

## useState

---

<iframe src="https://codesandbox.io/embed/state-6j97s?fontsize=14&hidenavigation=1&module=%2Fsrc%2FcountUp.jsx&theme=dark"
style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
title="State"
allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

---

Listes

```javascript
const UsersList = () => {
    return (
        <div>
            <Personne nom="Clément" age={30} />
            <Personne nom="Marie" age={28} />
            <Personne nom="Basile" age={3} />
            <Personne nom="Bébé" age={0} />
        </div>
    );
};
```

---

```jsx
const users = [
    { name: 'Clément', age: 30 },
    { name: 'Marie-Elisabeth', age: 28 },
    { name: 'Basile', age: 3 },
    { name: 'Bébé 2', age: 0 }
];
const UsersList = () => {
    return (
        <div>
            {users.map(({ name, age }) => (
                <div key={`person_${name}`}>
                    {name} - {age} an(s)
                </div>
            ))}
        </div>
    );
};
```

`key` permet à react d'optimiser vos listes avec un id unique

---

Rendu Conditionnel

```javascript
const Component = ({ visible }) => {
    if (!visible) {
        return null;
    }
    return <div> Mon Contenu </div>;
};
```

---

Rendu Conditionnel

```javascript
const Component = ({ visible }) => {
    return (
        <div>
            Mon Contenu
            {visible && <div>Contenu visible? </div>}
        </div>
    );
};
```

---

Formulaires

```javascript
const UserFieldName = ({ visible }) => {
    const [textField, setTextFieldValue] = useState('');

    return (
        <div>
            <input
                type="text"
                value={textField}
                onChange={(e) => {
                    setTextFieldValue(e.target.value);
                }}
            />
        </div>
    );
};
```

---

Actions

```javascript
const UserFieldName = ({ onAdd }) => {
    const [textField, setTextFieldValue] = useState('');

    return (
        <div>
            <input
                type="text"
                value={textField}
                onChange={(e) => {
                    setTextFieldValue(e.target.value);
                }}
            />
            <button
                onAdd={() => {
                    onAdd(textField);
                    setTextFieldValue('');
                }}
            >
                Ajouter
            </button>
        </div>
    );
};
```

---

Actions

```javascript
const UsersList = ({ visible, onAdd }) => {
    const [users, setUsers] = useState([]);

    return (
        <div>
            <UsersListDisplay users={users} />
            <UserFieldName
                onAdd={(newUser) => {
                    setUsers([...users, newUser]);
                }}
            />
        </div>
    );
};
```

---

Hands On : Création d'une liste

* Afficher la liste
* Trier la liste
* Ajouter des éléments à la liste

---

## create-react-app

-   Bootstraper une application react
-   Moins de configuration ingrate
-   Ejectable
-   Plein de choses dedans : Typescript, ESnext, tests unitaires, devserver, codesplitting, sourcemaps...

---

## create-react-app

-   Prérequis : node 10+
-   `npx create-react-app mon-appli`

---

## Styles

-   Inclus avec react <!-- .element: style="font-size:20px;" -->
    -   style inline
-   Modules CSS <!-- .element: style="font-size:20px;" -->
    -   CSS modules (.css /.sass)
    -   CSS in JS (jss)
    -   Styled components
-   Librairies Globales <!-- .element: style="font-size:20px;" -->
    -   Tailwind
    -   Bootstrap
-   UI Kits <!-- .element: style="font-size:20px;" -->
    -   Material UI
    -   Semantic UI
    -   React Bootstrap
    -   ...
