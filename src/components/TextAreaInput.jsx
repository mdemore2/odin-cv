function TextAreaInput({ id, label, formData, handleChange }) {
    return <div className="form-input">
        <label htmlFor={id}>{label}</label>
        <textarea rows='4' cols='50' id={id} name={id} value={formData[id]} onChange={event => handleChange(event)}></textarea>
    </div>

}

export default TextAreaInput;