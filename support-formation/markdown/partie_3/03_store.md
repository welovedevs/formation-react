## Super tout ça !

...

Mais comment on partage les données entre les pages?

---

## data.js

```javascript
import jsonData from './list/data.json';

export let persons = [...jsonData];

export const addPerson = (newUser) => {
    persons = [...persons, newUser];
};

export const deletePerson = (nameToDelete) => {
    persons = persons.filter(({ name }) => name !== nameToDelete);
};
```

Ne faites pas ça !

---

## State Manager/ Reducer

![Reducer Diagram](https://dmitripavlutin.com/5c33affee33e7c40e73028fb48a8367b/diagram.svg) <!-- .element: style="padding:16px;background-color:white;border-radius:8px" -->

Source : https://dmitripavlutin.com/react-usereducer/

<!-- .element: style="font-size:16px" -->

---

## Redux ?

Oui, mais...

---

## useReducer + useContext = redux (ou presque)

---

# useReducer

App.js

```javascript
const userStore = useReducer(userReducers, { users: rawUsers });
```

user_reducer.js

```javascript
export const userReducers = (state, action) => {
    switch (action.type) {
        case 'ADD_USER': {
            return {
                ...state,
                users: [...state.users, action.newUser]
            };
        }
        case 'DELETE_USER': {
            return {
                ...state, 
                users: state.users.filter(({ name }) => name !== action.nameToDelete)
            };
        }
    }
};
```

---

# context

store.js

```javascript
export const StoreContext = createContext({});
```

user_reducer.js

```javascript
export const userReducers = (state, action) => {
    switch (action.type) {
        case 'ADD_USER': {
            return {
                users: [...state.users, action.newUser]
            };
        }
        case 'DELETE_USER': {
            return {
                users: state.users.filter(({ name }) => name !== action.nameToDelete)
            };
        }
    }
};
```

---

```javascript

import { StoreContext } from './reducers/store';
import { userReducers } from './reducers/user_reducer';
import rawUsers from './data/users.json';

const Root = () => {
    const userStore = useReducer(userReducers, { users: rawUsers });
    return (
        <React.StrictMode>
            <StoreContext.Provider value={{ userStore }}>
                <BrowserRouter>
                    <!-- -->
                </BrowserRouter>
            </StoreContext.Provider>
        </React.StrictMode>
    );
};
```

---

Retour à notre liste..

```javascript
const {
    userStore: [state]
} = useContext(StoreContext);
const { users: list } = state;
```

---

Retour à notre liste..

```jsx

const {
    userStore: [state,dispatch]
} = useContext(StoreContext);

<ListDisplay 
    list={displayList} 
    onDelete={(nameToDelete) => 
        dispatch({ type: 'DELETE_USER', nameToDelete }        )} 
/>
```

---

Dans le formulaire...

```javascript
export const AddPersonForm = () => {
    const {
        userStore: [state, dispatch]
    } = useContext(StoreContext);
    const onAdd = (newUser) => {
        dispatch({
            type: 'ADD_USER',
            newUser
        });
    };

```

---

Dans le formulaire...

```javascript
<button
    onClick={() => {
        onAdd({ name, age, department });
        resetForm();
        navigate('/users');
    }}
>
    Ajouter
</button>
```
---

Hands on :

* Ajouter un contexte pour le store
* Ajouter un reducer
* changer les onAdd/onDelete

[Lien Sandbox 4](https://codesandbox.io/s/correction-partie-3-0uxl8)


---

Corrigé part 4

https://codesandbox.io/s/04-correction-partie-4-tr44j