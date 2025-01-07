import '../styles/form.css'
import TextInput from "./TextInput"
import DateInput from "./DateInput"
import TextAreaInput from "./TextAreaInput"
import { useState } from "react"
{/*import GeneralForm from './GeneralForm'*/}

function Form({formData, handleChange}) {

    const generalFields = ["Name", "Email", "Phone"];
    const educationFields = ["School Name", "Field of Study"];
    const experienceFields = ["Employer", "Position"];



    return <div className="form">
        <h3>General Details</h3>
        {generalFields.map((field) => (
            <TextInput key={field} label={field + ': '} id={field} formData={formData} handleChange={handleChange} />
        ))}
        {/*<GeneralForm formData={formData} handleChange={handleChange} /> keep getting handleChange is not a func when passing to child of child*/}
        <h3>Education Details</h3>
        {educationFields.map((field) => (
            <TextInput key={field} label={field + ': '} id={field} formData={formData} handleChange={handleChange} />
        ))}
        <DateInput id="educationStart" label="Start Date: " formData={formData} handleChange={handleChange}/>
        <DateInput id="educationEnd" label="End Date: " formData={formData} handleChange={handleChange}/>
        <h3>Experience Details</h3>
        {experienceFields.map((field) => (
            <TextInput key={field} label={field + ': '} id={field} formData={formData} handleChange={handleChange}/>
        ))}
        <DateInput id="jobStart" label="Start Date: " formData={formData} handleChange={handleChange}/>
        <DateInput id="jobEnd" label="End Date: " formData={formData} handleChange={handleChange}/>
        <TextAreaInput id="jobDescription" label="Job Description: " formData={formData} handleChange={handleChange} />
    </div>

}

export default Form
