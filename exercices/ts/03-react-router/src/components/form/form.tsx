import { ListUser } from '../../types/users';
import React, { FormEvent, useContext, useState } from 'react';
import styles from './form.module.css';
import { UsersContext } from '../../context/users_context';

export const UserForm: React.FC<{}> = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(23);
    const [department, setDepartment] = useState<ListUser['department']>('it');
    const { onAdd } = useContext(UsersContext);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('submit');
        onAdd({ name, age, department });
        setName('');
        setAge(23);
        setDepartment('');
    };
    return (
        <div className={styles.form}>
            <div className={styles.formItem}>
                <label>Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            <div className={styles.formItem}>
                <label>age</label>
                <input type="number" onChange={(e) => setAge(Number(e.target.value))} value={age} />
            </div>
            <div className={styles.formItem}>
                <label>Department</label>
                <input type="text" onChange={(e) => setDepartment(e.target.value)} value={department} />
            </div>
            <button type="button" onClick={handleSubmit}>
                Add
            </button>
        </div>
    );
};
