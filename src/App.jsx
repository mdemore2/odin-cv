import React, { useState } from "react";
import Header from './components/Header.jsx'
import Form from './components/Form.jsx'
import CV from "./components/CV.jsx";
import './App.css'


function App() {
    const [editForm, setEditForm] = useState(true);

    const onToggleClick = (editForm) => () => {
        setEditForm(!editForm);
    }

    const [formData, setFormData] = useState({})
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
        console.log(`${name} : ${value}`);
    };


    return <div className="App">
        <Header editForm={editForm} onClickFunc={onToggleClick} />
        {editForm ? <Form formData={formData} handleChange={handleChange} /> : <CV formData={formData}/>}
    </div>
}

export default App;