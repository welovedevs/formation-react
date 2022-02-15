import { ListUser } from '../../types/users';
import React, { FormEvent, useContext, useState } from 'react';
import styles from './form.module.css';
import { UsersWriteContext } from '../../store/users/users_context';
import { ADD_USER } from '../../store/users/actions';
import { useNavigate } from 'react-router';

export const UserForm: React.FC<{}> = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(23);
    const [department, setDepartment] = useState<ListUser['department']>('it');
    const navigate = useNavigate();
    const { dispatch } = useContext(UsersWriteContext);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('submit');
        dispatch({ type: ADD_USER, newUser: { name, age, department } });
        navigate('/users');
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
