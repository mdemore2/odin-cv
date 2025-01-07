import '../styles/cv.css'


function CV({formData}) {
    return <div className='cv'>
        <div className='cv-general'>
            <h1>{formData['Name']}</h1>
            <p>{formData['Email']}</p>
            <p>{formData['Phone']}</p>
        </div>
        <div className='cv-education'>
            <h2>{formData['School Name']}</h2>
            <p>{formData['educationStart']} - {formData['educationEnd']}</p>
            <p>{formData['Field of Study']}</p>
        </div>
        <div className='cv-experience'>
            <h2>{formData['Employer']}</h2>
            <h3>{formData['Position']}</h3>
            <p>{formData['jobStart']} - {formData['jobEnd']}</p>
            <p>{formData['jobDescription']}</p>
        </div>

        {/*{Object.entries(formData).map(([key, value]) => (
            <p key={key} id={key}>{key}: {value}</p>
        ))}*/}
    </div>
}

export default CV;