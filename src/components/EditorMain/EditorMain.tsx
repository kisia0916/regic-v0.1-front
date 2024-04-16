import React from "react";
import "./EditorMain.css"
import TarmSpaceMain from "./TarmSpaceMain/TarmSpaceMain";
import EditorSpaceMain from "./EditorSpaceMain/EditorSpaceMain";

function EditorMain(){
    return (
        <div className="EditorMain">
            <div className="EditorMainTopBar">

            </div>
            <TarmSpaceMain/>
            <EditorSpaceMain/>
        </div>
    )
}

export default EditorMain