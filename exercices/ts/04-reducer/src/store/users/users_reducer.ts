import { ListUser } from '../../types/users';
import { ADD_USER, DELETE_USER } from './actions';

interface BaseAction<T> {
    type: T;
}

interface AddUserAction extends BaseAction<typeof ADD_USER> {
    newUser: ListUser;
}
interface DeleteUserAction extends BaseAction<typeof DELETE_USER> {
    nameToDelete: string;
}

export type UserReducerAction = AddUserAction | DeleteUserAction;

export interface UserReducerState {
    users: Array<ListUser>;
}

export const usersReducer = (state: UserReducerState, action: UserReducerAction) => {
    switch (action.type) {
        case ADD_USER: {
            return {
                ...state,
                users: [...state.users, action.newUser]
            };
        }
        case DELETE_USER: {
            return {
                ...state,
                users: state.users.filter(({ name }) => name !== action.nameToDelete)
            };
        }
    }
};
