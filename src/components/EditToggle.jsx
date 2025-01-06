function EditToggle({editForm, onClickFunc}) {
    if (editForm) {
        return <button onClick={onClickFunc(editForm)}>Submit</button>
    }
    else {
        return <button onClick={onClickFunc(editForm)}>Edit</button>
    }
}

export default EditToggle;