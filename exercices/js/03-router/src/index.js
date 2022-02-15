import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { List } from './components/list/list';
import { UserPage } from './components/user_page/user_page';
import { AddPersonForm } from './components/form/addPersonForm';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="users" element={<List />}>
                        <Route path=":id" element={<UserPage />} />
                    </Route>
                    <Route path="form" element={<AddPersonForm />} />
                    <Route path="*" element={<div>404!</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
