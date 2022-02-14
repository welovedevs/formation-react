import { useContext, useEffect, useMemo, useState } from 'react';
import './list.css';
import { Link, Outlet } from 'react-router-dom';
import { UsersReadContext, UsersWriteContext } from '../../reducers/store';

export const ListDisplay = ({ list }) => {
    const dispatch = useContext(UsersWriteContext);

    return (
        <div className="items-container">
            {list.map(({ name, age, department }, index) => (
                <div className="list-item" key={`list_item_${name}`}>
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

                    <button onClick={() => dispatch({ type: 'DELETE_USER', nameToDelete: name })}>X</button>
                </div>
            ))}
        </div>
    );
};

export const List = () => {
    const { users: list } = useContext(UsersReadContext);

    const [sortByAge, setSortByAge] = useState(false);

    const displayList = useMemo(() => {
        return sortByAge ? [...list].sort(({ age: a }, { age: b }) => a - b) : list;
    }, [sortByAge, list]);

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
                <ListDisplay list={displayList} />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
