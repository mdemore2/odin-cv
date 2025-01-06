import React, { useState } from "react";
import Header from './components/Header.jsx'
import Form from './components/Form.jsx'
import './App.css'


function App() {
    const [editForm, setEditForm] = useState(true);

    const onToggleClick = (editForm) => () => {
        setEditForm(!editForm);
    }


    return <div className="App">
        <Header editForm={editForm} onClickFunc={onToggleClick} />
        <Form />
    </div>
}

export default App;