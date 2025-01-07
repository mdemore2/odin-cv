function CV({formData}) {
    return <div>
        {Object.entries(formData).map(([key, value]) => (
            <p key={key} id={key}>{key}: {value}</p>
        ))}
    </div>
}

export default CV;