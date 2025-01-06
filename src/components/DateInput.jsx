function DateInput({ id, label, handleChange }){
    return <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} type="month" onChange={event => handleChange(event)} />
    </div>

}

export default DateInput;