import { useParams } from 'react-router';
import React, { useContext, useMemo } from 'react';
import { UsersContext } from '../../store/users/users_context';
import { Link, Navigate } from 'react-router-dom';
import styles from './user_informations.module.css';
import { DELETE_USER } from '../../store/users/actions';

export const UserInformations = () => {
    const params = useParams<{ name: string }>();
    const {
        userReducer: [state, dispatch]
    } = useContext(UsersContext);

    const user = useMemo(() => {
        return state.users.find(({ name }) => params.name === name);
    }, [state.users, params.name]);

    if (!user) {
        return <Navigate to="/users" />;
    }

    const deleteUser = () => dispatch({ type: DELETE_USER, nameToDelete: user.name });

    return (
        <div className={styles.card}>
            <Link to={`/users/${user.name}`}>
                <img
                    alt={`${user.name} Profile picture`}
                    src={`https://i.pravatar.cc/250?u=${user.name}_${user.age}`}
                    className={styles.img}
                />
            </Link>
            <span>
                {user.name} - {user.age}
            </span>
            <span>Département: {user.department}</span>
            <button onClick={deleteUser}>Supprimer</button>
        </div>
    );
};
