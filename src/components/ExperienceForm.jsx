import TextInput from "./TextInput";
import DateInput from "./DateInput";
import TextAreaInput from "./TextAreaInput";

function ExperienceForm() {
    const fields = ["Employer", "Position"];
    return <div className="form general">
        <h3>Education Details</h3>
        {fields.map((field) => (
            <TextInput key={field} label={field + ': '} id={field} field={field} />
        ))}
        <DateInput id="jobStart" label="Start Date: "/>
        <DateInput id="jobEnd" label="End Date: "/>
        <TextAreaInput id="jobDescription" label="Job Description: "/>
    </div>
}

export default ExperienceForm;