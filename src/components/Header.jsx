import EditToggle from "./EditToggle";
import '../styles/header.css'


function Header({editForm, onClickFunc}){
    return <div className="header">
        <h1>CV Builder</h1>
        <EditToggle editForm={editForm} onClickFunc={onClickFunc} />

    </div>
}

export default Header;