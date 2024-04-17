import React from "react";
import "./EditorMain.css"
import TarmSpaceMain from "./TarmSpaceMain/TarmSpaceMain";
import EditorSpaceMain from "./EditorSpaceMain/EditorSpaceMain";
import FileViewerSpaceMain from "./FileViewerSpaceMain/FileViewerSpaceMain";

function EditorMain(){
    return (
        <div className="EditorMain">
            <div className="EditorContentMain">
                <div className="EditorMainTopBar">

                </div>
                <TarmSpaceMain/>
                <EditorSpaceMain/>
            </div>
            <FileViewerSpaceMain/>

        </div>
    )
}

export default EditorMain