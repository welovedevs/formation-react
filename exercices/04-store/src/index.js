import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddPersonForm, List } from './components/list/list';
import { UserPage } from './components/user-page/user-page';
import { StoreContext } from './reducers/store';
import { userReducers } from './reducers/user_reducer';
import rawUsers from './data/users.json';

const Root = () => {
    const userStore = useReducer(userReducers, { users: rawUsers });
    return (
        <React.StrictMode>
            <StoreContext.Provider value={{ userStore }}>
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
            </StoreContext.Provider>
        </React.StrictMode>
    );
};
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
