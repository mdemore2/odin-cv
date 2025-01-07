import EditToggle from "./EditToggle";

function Header({editForm, onClickFunc}){
    return <div className="header">
        <h2>CV Builder</h2>
        <EditToggle editForm={editForm} onClickFunc={onClickFunc} />

    </div>
}

export default Header;