import { useContext, useState } from 'react';
import './list.css';

import { Link, Outlet, useHistory } from 'react-router-dom';
import { StoreContext } from '../../reducers/store';
import { useNavigate } from 'react-router';

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

export const AddPersonForm = () => {
    const {
        userStore: [state, dispatch]
    } = useContext(StoreContext);
    const onAdd = (newUser) => {
        dispatch({
            type: 'ADD_USER',
            newUser
        });
    };
    const navigate = useNavigate();
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
                    navigate('/users');
                }}
            >
                Ajouter
            </button>
        </div>
    );
};
export const List = ({}) => {
    const {
        userStore: [state, dispatch]
    } = useContext(StoreContext);
    const { users: list } = state;

    const [sortByAge, setSortByAge] = useState(false);

    const displayList = sortByAge ? [...list].sort(({ age: a }, { age: b }) => a - b) : list;

    return (
        <div className="container">
            <div className="sort-control">
                <input type={'checkbox'} checked={sortByAge} onClick={() => setSortByAge(!sortByAge)} />
                <label>Trier par age</label>
            </div>
            <ListDisplay
                list={displayList}
                onDelete={(nameToDelete) => dispatch({ type: 'DELETE_USER', nameToDelete })}
            />
            <Outlet />
        </div>
    );
};
