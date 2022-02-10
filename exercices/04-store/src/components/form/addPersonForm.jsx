import { useCallback, useContext, useState } from 'react';
import './form.css';
import { useNavigate } from 'react-router';
import { StoreContext } from '../../reducers/store';

export const AddPersonForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(23);
    const [department, setDepartment] = useState('it');
    const navigate = useNavigate();
    const {
        userStore: [, dispatch]
    } = useContext(StoreContext);
    const resetForm = () => {
        setName('');
        setAge(23);
        setDepartment('it');
    };

    const handleClick = useCallback(() => {
        dispatch({
            type: 'ADD_USER',
            newUser: { name, age, department }
        });
        resetForm();
        navigate('/users');
    }, [name, age, department]);
    return (
        <div className="form">
            <span>Ajouter un élément</span>
            <input type="text" value={name} placeholder="Nom :" onChange={(e) => setName(e.target.value)} />
            <input type="number" value={age} placeholder="Age :" onChange={(e) => setAge(Number(e.target.value))} />
            <input type="text" value={department} placeholder="Age :" onChange={(e) => setDepartment(e.target.value)} />
            <button onClick={handleClick}>Ajouter</button>
        </div>
    );
};
