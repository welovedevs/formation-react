import React, { createContext } from 'react';
import { UserReducerAction, UserReducerState } from './users_reducer';

export const UsersContext = createContext<{
    userReducer: [UserReducerState, React.Dispatch<UserReducerAction>];
}>({ } as any);

export const UsersReadContext = createContext<{
    usersState: UserReducerState
}>({ } as any);

export const UsersWriteContext = createContext<{
    dispatch: React.Dispatch<UserReducerAction>
}>({ } as any);
