import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import './list.css';
import { AppContext } from '../../context/app_context';
import {AddPersonForm} from "../form/addPersonForm";

export const ListDisplay = ({ list, onDelete }) => {
    return (
        <div className="items-container">
            {list.map(({ name, age, department }, index) => (
                <div key={`list_item_${name ?? `unknown_${index}`}`} className="list-item">
                    <img alt="user avatar" className="list-item-img" src={`https://i.pravatar.cc/250?${name}_${age}`} />
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
    const { list, setList } = useContext(AppContext);

    const [sortByAge, setSortByAge] = useState(false);

    const displayList = useMemo(() => {
        return sortByAge ? [...list].sort(({ age: a }, { age: b }) => a - b) : list;
    }, [sortByAge, list]);

    let onAdd = useCallback(
        (newItem) => setList([...list, newItem]),
        [list]
    );
    let onDelete = useCallback(
        (nameToDelete) => setList(list.filter(({ name }) => name && name !== nameToDelete)),
        [list]
    );

    useEffect(() => {
        console.log(`New list length, ${displayList.length}`);
    }, [displayList.length]);

    return (
        <div className="container">
            <AddPersonForm onAdd={onAdd} />
            <div className="sort-control">
                <input type={'checkbox'} checked={sortByAge} onClick={() => setSortByAge(!sortByAge)} />
                <label>Trier par age</label>
            </div>
            <ListDisplay list={displayList} onDelete={onDelete} />
        </div>
    );
};
