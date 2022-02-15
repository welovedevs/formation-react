import {useNavigate, useParams} from 'react-router';
import React, {useContext, useEffect, useMemo} from 'react';
import { UsersContext } from '../../context/users_context';
import { Link, Navigate } from 'react-router-dom';
import styles from './user_informations.module.css';

export const UserInformations = () => {
    const params = useParams<{ name: string }>();
    const { users, onDelete } = useContext(UsersContext);
    const navigate = useNavigate();

    const user = useMemo(() => {
        return users.find(({ name }) => params.name === name);
    }, [users, params.name]);

   useEffect(() => {
       if(!user){
           navigate("/users")
       }
   },[user])

    if (!user) {
        return <Navigate to="/users" />;
    }

    return (
        <div className={styles.card}>
            <Link to={`/users/${user.name}`}>
                <img
                    alt={`${user.name} Profile picture`}
                    src={`https://i.pravatar.cc/250?${user.name}_${user.age}`}
                    className={styles.img}
                />
            </Link>
            <span>
                {user.name} - {user.age}
            </span>
            <span>Département: {user.department}</span>
            <button onClick={() => onDelete(user.name)}>Supprimer</button>
        </div>
    );
};
