import { ListUser } from '../../types/users';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import styles from './list.module.css';
import { Link, Outlet } from 'react-router-dom';
import { useWindowWidth } from '../../hooks/use_window_width';
import { UsersReadContext } from '../../store/users/users_context';
import { fetchUsers } from '../../actions/users_actions';

const UserItem: React.FC<{ user: ListUser }> = ({ user }) => {
    return (
        <Link to={`/users/${user.id}`}>
            <div className={styles.card}>
                <img
                    alt={`${user.name} Profile picture`}
                    src={`https://i.pravatar.cc/250?u=${user.name}_${user.id}`}
                    className={styles.img}
                />
                <span>
                    {user.name} - {user.id}
                </span>
            </div>
        </Link>
    );
};

export const UserList: React.FC = () => {
    const { width } = useWindowWidth();
    const { usersState } = useContext(UsersReadContext);
    const [searchText, setSearchText] = useState('');
    const [users, setUsers] = useState<ListUser[]>([]);
    const ref = useRef<number | null>(null);

    useEffect(() => {
        if (ref.current) {
            window.clearTimeout(ref.current);
        }
        ref.current = window.setTimeout(() => {
            fetchUsers(searchText).then((results) => setUsers(results));
        }, 500);
    }, [searchText]);

    return (
        <div>
            <div>
                <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <label>Search For Users</label>
            </div>
            <div className={styles.listContainer}>
                <div className={styles.list}>
                    <h2>Search engine Results</h2>
                    {users.map((user) => (
                        <UserItem key={`user_list_item_${user.id}`} user={user as ListUser} />
                    ))}
                </div>
                <div className={styles.list}>
                    <h2>Stored Users</h2>
                    {Object.values(usersState.users).map((user) => (
                        <UserItem key={`user_list_item_${user.id}`} user={user as ListUser} />
                    ))}
                </div>
                <Outlet />
            </div>
            <div>{width}px</div>
        </div>
    );
};
