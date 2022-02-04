## Hooks

---

useEffect

Applique des effets de bord

```javascript
const [value, setValue] = useState(4);

useEffect(() => {
    console.log(`New value is ${value}`);
}, [value]);
```

---

useEffect - cleanup

```javascript
const [value, setValue] = useState(4);

useEffect(() => {
    window.addEventListener('resize', () => {
        console.log('Window resized');
    });
    return () => {
        window.removeEventListener('resize');
        // appliqué lors du démontage du componsant
    };
}, []); ==> seulement au premier rendu !
```

---

useMemo

Memoise une valeur

```javascript
const value = {};

const memoisedValue = useMemo(() => {
    return heavyComputation(value);
}, [value]);
```

---

useCallback

Memoise un callback

```javascript
const Component = () => {
    const [value, setValue] = useState();

    const deleteItem = useCallback(() => {
        setValue(/*newValue*/);
    }, []);

    return <ChildComponent onClick={deleteItem} />;
};
```

La création d'objets et de fonctions coute "cher" et créee des nouveaux rendus car nouvelle instance à chaque rendu.

<!-- .element: style="font-size:20px" -->

Permet d'éviter un rendu de ChildComponent

<!-- .element: style="font-size:20px" -->

---

## Dépendances

Change sur la référence est non pas sur la valeur

Attention aux objets et tableaux.

---

## Rule of hooks

-   Top level
-   Seulement dans les composants

```javascript
const Component = ({ value }) => {
    if (value === null) {
        return null;
    }

    const [stateValue, setStateValue] = useState();
};
```

^ Incorrect

---

## Hooks Personalisés

```javascript
const useWindowWidth = () => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        var handler = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handler);
        return () => {
            window.removeEventListener('resize', handler);
            // appliqué lors du démontage du componsant
        };
    }, []);

    return { width };
};
```

```javascript
const MyComponent = () => {
    const { width } = useWindowWidth();
};
```

---

## useContext

```javascript
const MyContext = createContext();

const Root = () => {
    return (
        <MyContext.Provider value={{ myValue: 'Toto' }}>
            <App />
        </MyContext.Provider>
    );
};
```

```javascript
const SomeDeepNestedComponent = () => {
    const { myValue } = useContext(MyContext);
};
```

---

## useReducer

```javascript
const reducer = (state, action) => {
    switch (action.type){
        case "ADD" {
            return {
                ...state,
                items : [...state, action.item]
            }
        }
    }
}
```

```javascript
const Component = () => {
    const [state, dispatch] = useReducer(reducer, { items: [] });
    return (
        <div>
            <button
                onClick={() => {
                    dispatch({
                        action: 'ADD',
                        item: {}
                    });
                }}
            />
        </div>
    );
};
```

---

## Hands-on : Hooks

-   useMemo: Memoiser une valeur
-   useCallback: Memoiser une fonction
-   useEffect: Appliquer un effet de bord
-   useContext: Stocker une valeur dans le contexte

On verra useReducer plus tard !
