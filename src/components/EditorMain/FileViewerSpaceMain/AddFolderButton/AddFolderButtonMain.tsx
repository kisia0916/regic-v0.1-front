import React from "react";
import "./AddFolderButtonMain.css"

function AddFolderButtonMain(){
    return (
        <div className="AddFolderButtonMain">
            <div className="AddFolderButtonWarp">
                <img src="/icon/new_folder_fill (1).svg" alt="" className="AddFolderButtonIcon"/>
                <span className="AddFolderButtonText">New Folder</span>
            </div>
        </div>
    )
}

export default AddFolderButtonMain