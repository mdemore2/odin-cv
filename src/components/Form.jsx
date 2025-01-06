import '../styles/form.css'
import TextInput from "./TextInput"
import DateInput from "./DateInput"
import TextAreaInput from "./TextAreaInput"
import { useState } from "react"
{/*import GeneralForm from './GeneralForm'*/}

function Form() {
    const [formData, setFormData] = useState({})
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
        console.log(`${name} : ${value}`);
    };
    const generalFields = ["Name", "Email", "Phone"];
    const educationFields = ["School Name", "Field of Study"];
    const experienceFields = ["Employer", "Position"];



    return <div className="form">
        <h3>General Details</h3>
        {generalFields.map((field) => (
            <TextInput key={field} label={field + ': '} id={field}  handleChange={handleChange} />
        ))}
        {/*<GeneralForm handleChange={handleChange} /> keep getting handleChange is not a func when passing to child of child*/}
        <h3>Education Details</h3>
        {educationFields.map((field) => (
            <TextInput key={field} label={field + ': '} id={field} handleChange={handleChange} />
        ))}
        <DateInput id="educationStart" label="Start Date: "  handleChange={handleChange}/>
        <DateInput id="educationEnd" label="End Date: "  handleChange={handleChange}/>
        <h3>Experience Details</h3>
        {experienceFields.map((field) => (
            <TextInput key={field} label={field + ': '} id={field} handleChange={handleChange}/>
        ))}
        <DateInput id="jobStart" label="Start Date: " handleChange={handleChange}/>
        <DateInput id="jobEnd" label="End Date: " handleChange={handleChange}/>
        <TextAreaInput id="jobDescription" label="Job Description: " handleChange={handleChange} />
    </div>

}

export default Form
