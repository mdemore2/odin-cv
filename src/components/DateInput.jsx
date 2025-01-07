function DateInput({ id, label, formData, handleChange }){
    return <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} type="month" value={formData[id]} onChange={event => handleChange(event)} />
    </div>

}

export default DateInput;