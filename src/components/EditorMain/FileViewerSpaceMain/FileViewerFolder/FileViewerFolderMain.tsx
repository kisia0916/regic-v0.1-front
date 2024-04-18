import React from "react";
import "./FileViewerFolderMain.css"

function FileViewerFolderMain(props:{folderName:string,status:"open"|"close"}){
    return(
        <div className="FileViewerFolderMain">
            <img src="/icon/folder_fill.svg" className="FileViewerFolderMainIcon"/>
            <span>{props.folderName}</span>
        </div>
    )
}

export default FileViewerFolderMain