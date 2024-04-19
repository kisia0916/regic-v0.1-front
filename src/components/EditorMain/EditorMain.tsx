import React, { useState } from "react";
import "./EditorMain.css"
import TarmSpaceMain from "./TarmSpaceMain/TarmSpaceMain";
import EditorSpaceMain from "./EditorSpaceMain/EditorSpaceMain";
import FileViewerSpaceMain from "./FileViewerSpaceMain/FileViewerSpaceMain";

function EditorMain(){
    const [viewerStatus,setViewerStatus] = useState<"open"|"close">("close")
    const changeViewerStatus = ()=>{
        if (viewerStatus === "open"){
            setViewerStatus("close")
        }else{
            setViewerStatus("open")
        }
    }
    return (
        <div className="EditorMain">
            <div className="EditorContentMain">
                <div className="EditorMainTopBar">
                    <img src="/icon/menu_line.svg"alt="" onClick={changeViewerStatus}/>
                </div>
                <TarmSpaceMain/>
                <EditorSpaceMain/>
            </div>
            <FileViewerSpaceMain viewerStatus={viewerStatus} changeStatus={setViewerStatus}/>

        </div>
    )
}

export default EditorMain