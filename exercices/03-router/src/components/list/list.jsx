import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import './list.css';
import { AppContext } from '../../context/app_context';
import { Link, Outlet } from 'react-router-dom';
export const ListDisplay = ({ list, onDelete }) => {
    return (
        <div className="items-container">
            {list.map(({ name, age, department }, index) => (
                <Link to={`/users/${name}`} key={`list_item_${name}`}>
                    <div className="list-item">
                        <img
                            alt="user avatar"
                            className="list-item-img"
                            src={`https://i.pravatar.cc/250?${name}_${age}`}
                        />
                        <div className="list-item-text">
                            {name} - {age} ans
                        </div>
                        <div className="list-item-text">{department}</div>
                        <button onClick={() => onDelete(name)}>X</button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export const List = () => {
    const { list, setList } = useContext(AppContext);

    const [sortByAge, setSortByAge] = useState(false);

    const displayList = useMemo(() => {
        return sortByAge ? [...list].sort(({ age: a }, { age: b }) => a - b) : list;
    }, [sortByAge, list]);

    let onDelete = useCallback(
        (nameToDelete) => setList(list.filter(({ name }) => name && name !== nameToDelete)),
        [list]
    );

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
