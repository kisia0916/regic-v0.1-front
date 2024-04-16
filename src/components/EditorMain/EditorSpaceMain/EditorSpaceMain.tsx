import React, { useState } from "react";
import "./EditorSpaceMain.css"

function EditorSpaceMain(){
    const [codeLines,setCodeLines] = useState<string[]>(["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a",])
    return(
        <div className="EditorSpaceMain">
            <div className="EditorSpaceMainLeft">
                {codeLines.map((i,index)=>{
                    return (
                        <div className="EditorSpaceLineNumberWarp">
                        <span className="EditorSpaceLineNumber">{index+1}</span>     
                        </div>
                    )
                })}          
            </div>
            <div className="EditorSpaceMainRight">

            </div>
        </div>
    )   
}

export default EditorSpaceMain