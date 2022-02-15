import { ListUser } from '../../types/users';
import React, { useContext, useMemo, useState } from 'react';
import styles from './list.module.css';
import { Link, Outlet } from 'react-router-dom';
import { useWindowWidth } from '../../hooks/use_window_width';
import { UsersReadContext } from '../../store/users/users_context';

const UserItem: React.FC<{ user: ListUser }> = ({ user }) => {
    return (
        <Link to={`/users/${user.name}`}>
            <div className={styles.card}>
                <img
                    alt={`${user.name} Profile picture`}
                    src={`https://i.pravatar.cc/250?u=${user.name}_${user.age}`}
                    className={styles.img}
                />
                <span>
                    {user.name} - {user.age}
                </span>
            </div>
        </Link>
    );
};

export const UserList: React.FC = () => {
    const { width } = useWindowWidth();
    const { usersState } = useContext(UsersReadContext);
    const [sortByAge, setSortByAge] = useState(false);

    const { users: userList } = usersState;

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
            <div className={styles.listContainer}>
                <div className={styles.list}>
                    {sortedList.map((user) => (
                        <UserItem key={`user_list_item_${user.name}_${user.age}`} user={user as ListUser} />
                    ))}
                </div>
                <Outlet />
            </div>
            <div>{width}px</div>
        </div>
    );
};
