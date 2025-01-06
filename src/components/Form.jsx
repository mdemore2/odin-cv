import GeneralForm from "./GeneralForm"
import '../styles/form.css'
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"

function Form() {
    return <div>
        <h2>CV Builder Inputs</h2>
        <GeneralForm />
        <EducationForm />
        <ExperienceForm />
    </div>
}

export default Form
