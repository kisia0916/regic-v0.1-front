import React, { useState } from "react";
import "./FileViewerSpaceMain.css"
import FileViewerFolderMain from "./FileViewerFolder/FileViewerFolderMain";
import FileViewerFileMain from "./FileViewerFile/FileViewerFileMain";
import FileIndentSpace from "./FileIndentSpace/FileIndentSpaceMain";

function FileViewerSpaceMain(){
    const [fileStructure,setFileStructure] = useState<any>([])
    return (
        <div className="FileViewerSpaceMain">
            <div className="FileViewerSpaceTop">
                <span className="fileViewerSpaceProjectName">Regic-v0.1-beta</span>
            </div>
            <div className="FileViewerSpaceBottom">
                <FileViewerFolderMain status="open"/>
                <div className="FileViewerSpaceWarp">
                    <FileIndentSpace/><FileViewerFileMain/>
                </div>
            </div>
        </div>
    )
}

export default FileViewerSpaceMain