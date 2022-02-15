import { useContext, useEffect } from 'react';
import { UsersReadContext, UsersWriteContext } from '../../store/users/users_context';
import { fetchUser } from '../../actions/users_actions';

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
