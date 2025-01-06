import TextInput from "./TextInput";
import DateInput from "./DateInput";

function EducationForm() {
    const fields = ["School Name", "Field of Study"];
    return <div className="form general">
        <h3>Education Details</h3>
        {fields.map((field) => (
            <TextInput key={field} label={field + ': '} id={field} field={field} />
        ))}
        <DateInput id="educationStart" label="Start Date: "/>
        <DateInput id="educationEnd" label="End Date: "/>

    </div>
}

export default EducationForm;