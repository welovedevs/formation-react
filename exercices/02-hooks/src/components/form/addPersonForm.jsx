import { useState } from 'react';
import './form.css';

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
