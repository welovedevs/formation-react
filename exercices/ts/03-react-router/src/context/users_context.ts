import { createContext } from 'react';
import { ListUser } from '../types/users';

export const UsersContext = createContext<{
    users: Array<ListUser>;
    onAdd: (newUser: ListUser) => void;
    onDelete: (nameToDelete: string) => void;
}>({ users: [] } as any);
