import { createContext, useContext, useReducer } from 'react';
import { userReducers } from './user_reducer';

import rawUsers from '../data/users.json';
export const UsersReadContext = createContext({});
export const UsersWriteContext = createContext(null);

export const UsersProvider = (props) => {
    const [state, dispatch] = useReducer(userReducers, { users: rawUsers });

    return (
        <UsersWriteContext.Provider value={dispatch}>
            <UsersReadContext.Provider value={state}>{props.children} </UsersReadContext.Provider>
        </UsersWriteContext.Provider>
    );
};
