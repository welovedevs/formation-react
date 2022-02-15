Récupérer de la donnée avec react

---

fetch

```javascript
fetch(url).then(result => ...)
```

---

Le result contient plusieurs choses

-   result.ok ==> la requête a renvoyé 2xx
-   result.status ==> Le résultat de la requête
-   result.json() ==> La promesse du résultat au format json
-   result.text(), result.arrayBuffer(), result.blob(): Des promesses à un autre format

---

Exemple

```javascript
return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((result) => {
    if (result.ok) {
        return result.json(); // caster en typescript éventuellement as Promise<VotreType>
    }
    throw new Error(`Failed to fetch, status: ${result.status}`);
});
```

---

Utilisation avec react

Dans un useEffect :

```javascript
useEffect(() => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then((result) => {
            if (result.ok) {
                return result.json(); // caster en typescript éventuellement as Promise<VotreType>
            }
            throw new Error(`Failed to fetch, status: ${result.status}`);
        })
        .then((user) => setUser(user)); // ou dispatch dans un reducer par ex
}, [params.id]);
```

---

Quelques conseils 

* Extraire le comportement dans un fichier à part (users_actions.js) pour éviter le bruit dans le code
* Eventuellement faire un hook pour gérer tout le comportement de l'appli 

---

Exemple : useUser(id)

```javascript

export const useUser = (id: string | null) => {
    const { dispatch } = useContext(UsersWriteContext);
    const { usersState } = useContext(UsersReadContext);

    const user = usersState.users[id ?? ''];

    useEffect(() => {
        if (id && !user) {
            fetchUser(id).then((user) => dispatch({ type: 'ADD_USER', newUser: user }));
        }
    }, [id, user]);

    return { user };
};
```


