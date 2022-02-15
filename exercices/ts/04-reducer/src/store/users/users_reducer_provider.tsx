import React, { useReducer } from 'react';
import { usersReducer } from './users_reducer';
import rawList from '../../components/data.json';

import { UsersReadContext, UsersWriteContext } from './users_context';

export const UsersProvider: React.FC = (props) => {
    const [state, dispatch] = useReducer(usersReducer, { users: rawList });

    return (
        <UsersWriteContext.Provider value={{ dispatch }}>
            <UsersReadContext.Provider value={{ usersState: state }}>{props.children}</UsersReadContext.Provider>
        </UsersWriteContext.Provider>
    );
};
