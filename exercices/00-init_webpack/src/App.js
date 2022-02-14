import React from 'react';
import Form from './Form';
import SVG from './W3D_logo.svg';

function App() {
    return (
        <div>
            <h1>Welcome to My super react app</h1>
            <h3>Date : {new Date().toDateString()}</h3>
            <img src={SVG} />
            <Form />
        </div>
    );
}

export default App;
