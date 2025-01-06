import TextInput from "./TextInput";

function GeneralForm() {
    const fields = ["Name", "Email", "Phone"];
    return <div className="form general">
        <h3>General Details</h3>
        {fields.map((field) => (
            <TextInput key={field} label={field + ': '} id={field} field={field} />
        ))}
    </div>
}

export default GeneralForm;