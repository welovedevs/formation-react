import { ListUser } from '../../types/users';
import React, { useContext, useMemo, useState } from 'react';
import styles from './list.module.css';
import { UsersContext } from '../context/users_context';
import { useWindowWidth } from '../hooks/use_window_width';

const UserItem: React.FC<{ user: ListUser; onDelete: (string: string) => void }> = ({ user, onDelete }) => {
    return (
        <div className={styles.card}>
            <img
                alt={`${user.name} Profile picture`}
                src={`https://i.pravatar.cc/250?${user.name}_${user.age}`}
                className={styles.img}
            />
            <span>
                {user.name} - {user.age}
            </span>
            <button onClick={() => onDelete(user.name)}>Supprimer</button>
        </div>
    );
};
export const UserList: React.FC<{ onDelete: (string: string) => void }> = ({ onDelete }) => {
    const { width } = useWindowWidth();
    const { users: userList } = useContext(UsersContext);
    const [sortByAge, setSortByAge] = useState(false);

    const sortedList = useMemo(() => {
        if (sortByAge) {
            return [...userList].sort(({ age: a }, { age: b }) => a - b);
        }
        return userList;
    }, [sortByAge, userList]);

    return (
        <div>
            <div>
                <input type="checkbox" checked={sortByAge} onChange={(e) => setSortByAge(e.target.checked)} />
                <label> Sort By Age</label>
            </div>
            <div className={styles.list}>
                {sortedList.map((user) => (
                    <UserItem
                        key={`user_list_item_${user.name}_${user.age}`}
                        user={user as ListUser}
                        onDelete={onDelete}
                    />
                ))}
            </div>
            <div>{width}px</div>
        </div>
    );
};
