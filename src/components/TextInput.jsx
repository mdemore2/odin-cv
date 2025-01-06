function TextInput({ label, id, handleChange}) {
    return <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text"  name={id} onChange={event => handleChange(event)} ></input>
    </div>
}

export default TextInput;