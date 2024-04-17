import React from "react";
import "./FileViewerFolderMain.css"

function FileViewerFolderMain(pops:{status:"open"|"close"}){
    return(
        <div className="FileViewerFolderMain">
            <img src="/icon/folder_fill.svg" className="FileViewerFolderMainIcon"/>
            <span>mainFolder</span>
        </div>
    )
}

export default FileViewerFolderMain