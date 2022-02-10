import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import './list.css';
import { Link, Outlet } from 'react-router-dom';
import { StoreContext } from '../../reducers/store';

export const ListDisplay = ({ list, onDelete }) => {
    return (
        <div className="items-container">
            {list.map(({ name, age, department }, index) => (
                <div className="list-item">
                    <Link to={`/users/${name}`} key={`list_item_${name}`}>
                        <img
                            alt="user avatar"
                            className="list-item-img"
                            src={`https://i.pravatar.cc/250?${name}_${age}`}
                        />
                    </Link>
                    <div className="list-item-text">
                        {name} - {age} ans
                    </div>

                    <div className="list-item-text">{department}</div>

                    <button onClick={() => onDelete(name)}>X</button>
                </div>
            ))}
        </div>
    );
};

export const List = () => {
    const {
        userStore: [state, dispatch]
    } = useContext(StoreContext);
    const { users: list } = state;

    const [sortByAge, setSortByAge] = useState(false);

    const displayList = useMemo(() => {
        return sortByAge ? [...list].sort(({ age: a }, { age: b }) => a - b) : list;
    }, [sortByAge, list]);

    let onDelete = useCallback((nameToDelete) => dispatch({ type: 'DELETE_USER', nameToDelete }), [list]);

    useEffect(() => {
        console.log(`New list length, ${displayList.length}`);
    }, [displayList.length]);

    return (
        <div className="container">
            <div className="sort-control">
                <input type={'checkbox'} checked={sortByAge} onClick={() => setSortByAge(!sortByAge)} />
                <label>Trier par age</label>
            </div>
            <div className="users-container">
                <ListDisplay list={displayList} onDelete={onDelete} />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
