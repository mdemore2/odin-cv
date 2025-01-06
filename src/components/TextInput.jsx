function TextInput({ id, label, field}) {

    return <div>
        <label htmlFor={id}>{label}</label>
        <input key={id} type="text"  placeholder={field}></input>
    </div>
}

export default TextInput;