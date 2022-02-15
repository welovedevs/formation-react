import { ListUser } from '../types/users';

export const fetchUsers = (nameToSearch: string) => {
    return fetch(`https://jsonplaceholder.typicode.com/users?_limit=10&_start=0&username=${nameToSearch}`)
        .then((result) => {
            if (result.ok) {
                return result.json();
            }
            throw new Error(`Failed to fetch, status: ${result.status}`);
        })
        .then((result) => result as ListUser[]);
};

export const fetchUser = (id: string) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((result) => {
        if (result.ok) {
            return result.json() as Promise<ListUser>;
        }
        throw new Error(`Failed to fetch, status: ${result.status}`);
    });
};

export const fetchUserAsyncAwait = async (id: string) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!result.ok) {
        throw new Error(`Failed to fetch, status: ${result.status}`);
    }
    const json = (await result.json()) as ListUser;
    return json
};
