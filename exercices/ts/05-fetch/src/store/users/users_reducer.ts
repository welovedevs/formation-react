import { Address, Company, ListUser } from '../../types/users';
import { ADD_USER, DELETE_USER } from './actions';

interface BaseAction<T> {
    type: T;
}

interface AddUserAction extends BaseAction<typeof ADD_USER> {
    newUser: ListUser | null;
}
interface DeleteUserAction extends BaseAction<typeof DELETE_USER> {
    idToDelete: number;
}

export type UserReducerAction = AddUserAction | DeleteUserAction;

export interface UserReducerState {
    users: {
        [id: string]: ListUser;
    };
}

export const usersReducer = (state: UserReducerState, action: UserReducerAction) => {
    switch (action.type) {
        case ADD_USER: {
            if (!action.newUser) {
                return state;
            }
            return {
                ...state,
                users: {
                    ...state.users,
                    [action.newUser.id]: action.newUser
                }
            };
        }
        case DELETE_USER: {
            const newUsers = { ...state.users };
            delete newUsers[action.idToDelete];
            return {
                ...state,
                users: newUsers
            };
        }
    }
};
