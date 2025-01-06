function DateInput({ id, label }){
    return <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} key={id} type="month" />
    </div>

}

export default DateInput;