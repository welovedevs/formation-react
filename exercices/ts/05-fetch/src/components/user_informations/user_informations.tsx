import { useParams } from 'react-router';
import React, { useContext, useEffect, useMemo } from 'react';
import { UsersReadContext, UsersWriteContext } from '../../store/users/users_context';
import { Link, Navigate } from 'react-router-dom';
import styles from './user_informations.module.css';
import { DELETE_USER } from '../../store/users/actions';
import { fetchUser } from '../../actions/users_actions';
import { useUser } from '../../hooks/data/use_user';

export const UserInformations = () => {
    const params = useParams<{ id: string }>();
    const { user } = useUser(params?.id ?? null);

    if (!params.id) {
        return <div>Wrong url parameter</div>;
    }
    // const deleteUser = () => dispatch({ type: 'DELETE_USER', nameToDelete: user.name });
    if (!user) {
        return <div>Loading...</div>;
    }
    return (
        <div className={styles.card}>
            <Link to={`/users/${user.name}`}>
                <img
                    alt={`${user.name} Profile picture`}
                    src={`https://i.pravatar.cc/250?u=${user.name}_${user.id}`}
                    className={styles.img}
                />
            </Link>
            <span>
                {user.name} - {user.id}
            </span>
            <span>
                Email: <a href={`mailto:${user.email}`}>{user.email}</a>
            </span>
            {/*<button onClick={deleteUser}>Supprimer</button>*/}
        </div>
    );
};
