import TextInput from "./TextInput";

function GeneralForm(formData, handleChange) {
    const generalFields = ["Name", "Email", "Phone"];
    return <div className="form general">
        <h3>General Details</h3>
        {generalFields.map((field) => (
            <TextInput key={field} label={field + ': '} id={field}  handleChange={handleChange} />
        ))}
    </div>
}

export default GeneralForm;