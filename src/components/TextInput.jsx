function TextInput({ field }) {
    return <input key={field} type="text" placeholder={field}></input>
}

export default TextInput;