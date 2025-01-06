function TextAreaInput({ id, label, handleChange }) {
    return <div>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} name={id} onChange={event => handleChange(event)}></textarea>
    </div>

}

export default TextAreaInput;