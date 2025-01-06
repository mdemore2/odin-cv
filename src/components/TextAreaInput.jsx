function TextAreaInput({ id, label }) {
    return <div>
        <label htmlFor={id}>{label}</label>
        <textarea id={id}></textarea>
    </div>

}

export default TextAreaInput;