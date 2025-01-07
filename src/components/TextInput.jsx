function TextInput({ label, id, formData, handleChange}) {
    return <div className="form-input">
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text"  name={id} value={formData[id]} onChange={event => handleChange(event)} ></input>
    </div>
}

export default TextInput;