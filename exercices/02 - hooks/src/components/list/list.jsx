import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import './list.css';
import { AppContext } from '../../context/app_context';

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

export const AddPersonForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(23);
    const [department, setDepartment] = useState('it');

    const resetForm = () => {
        setName('');
        setAge(23);
        setDepartment('it');
    };
    return (
        <div className="form">
            <span>Ajouter un élément</span>
            <input type="text" value={name} placeholder="Nom :" onChange={(e) => setName(e.target.value)} />
            <input type="number" value={age} placeholder="Age :" onChange={(e) => setAge(Number(e.target.value))} />
            <input type="text" value={department} placeholder="Age :" onChange={(e) => setDepartment(e.target.value)} />
            <button
                onClick={() => {
                    onAdd({ name, age, department });
                    resetForm();
                }}
            >
                Ajouter
            </button>
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
            <AddPersonForm onAdd={(newItem) => setList([...list, newItem])} />
            <div className="sort-control">
                <input type={'checkbox'} checked={sortByAge} onClick={() => setSortByAge(!sortByAge)} />
                <label>Trier par age</label>
            </div>
            <ListDisplay list={displayList} onDelete={onDelete} />
        </div>
    );
};
