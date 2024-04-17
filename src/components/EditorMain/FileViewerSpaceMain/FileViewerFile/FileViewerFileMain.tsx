import React from "react";
import "./FileViewerFileMain.css"

function FileViewerFileMain(){
    return (
        <div className="FileViewerFileMain">
            <img src="/icon/file_fill (1).svg" className="FileViewerFileMainIcon"/>
            <span className="FileViewerFileName">main.py</span>
        </div>
    )
}

export default FileViewerFileMain