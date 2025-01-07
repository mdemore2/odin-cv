import '../styles/cv.css'




function CV({formData}) {
    const formatDate = (formDate) => {
        return new Date(formDate).toLocaleString('default', {timeZone: "UTC", month:'long', year:'numeric'})
    }


    return <div className='cv'>
        <div className='cv-general'>
            <h1>{formData['Name']}</h1>
            <hr></hr>
            <br></br>
            <p>{formData['Email']}</p>
            <p>{formData['Phone']}</p>
        </div>
        <br></br>
        <div className='cv-education'>
            <h1>Education</h1>
            <hr></hr>
            <br></br>
            <span>
                <h2>{formData['School Name']}</h2>
                <p>{formatDate(formData['educationStart'])} - {formatDate(formData['educationEnd'])}</p>
            </span>
            <p>{formData['Field of Study']}</p>
        </div>
        <br></br>
        <div className='cv-experience'>
            <h1>Experience</h1>
            <hr></hr>
            <br></br>
            <h2>{formData['Employer']}</h2>
            <span>
                <h3>{formData['Position']}</h3>
                <p>{formatDate(formData['jobStart'])} - {formatDate(formData['jobEnd'])}</p>
            </span>
            <br></br>
            <p>{formData['jobDescription']}</p>
        </div>

        {/*{Object.entries(formData).map(([key, value]) => (
            <p key={key} id={key}>{key}: {value}</p>
        ))}*/}
    </div>
}

export default CV;