import list from '../data.json';
import { ListUser } from '../../types/users';
import React, { useState } from 'react';
import styles from './list.module.css';

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
export const UserList: React.FC<{ userList: Array<ListUser>; onDelete: (string: string) => void }> = ({
    userList,
    onDelete
}) => {
    const [sortByAge, setSortByAge] = useState(false);

    const sortedList = sortByAge ? [...userList].sort(({ age: a }, { age: b }) => a - b) : userList;

    return (
        <div>
            <div>
                <input type="checkbox" checked={sortByAge} onChange={(e) => setSortByAge(e.target.checked)} />
                <label> Sort By Age</label>
            </div>
            <div className={styles.list}>
                {sortedList.map((user) => (
                    <UserItem key={`user_list_item_${user.name}_${user.age}`} user={user as ListUser} onDelete={onDelete} />
                ))}
            </div>
        </div>
    );
};
