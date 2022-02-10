Tout est composant!

![Components everywhere !](https://reactjs.org/static/9381f09e609723a8bb6e4ba1a7713b46/90cbd/thinking-in-react-components.png)

---

### React.Component

-   Penser en composants
-   Les composants sont des fonctions !
-   Ils prennent des atrributs (props)
-   Ils sont censés être stables (purs)

---
<iframe src="https://codesandbox.io/embed/sandbox-z7csf?fontsize=14&theme=dark"
style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
title="Sandbox"
allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

---

Suite

- Listes
- Rendu Conditionnel

---

<iframe src="https://codesandbox.io/embed/sandbox-2-6uosu?fontsize=14&module=%2Fsrc%2FApp.js&theme=dark"
style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
title="Sandbox 2"
allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

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

-   Afficher la liste
-   Trier la liste
-   Ajouter des éléments à la liste

[Lien Sandbox 1](https://codesandbox.io/s/starter-exercice-1-mki6f)

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
