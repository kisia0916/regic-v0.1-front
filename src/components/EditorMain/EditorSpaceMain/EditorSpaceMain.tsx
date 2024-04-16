import React, { useEffect, useState } from "react";
import "./EditorSpaceMain.css"

function EditorSpaceMain(){
    const lineHeight:number = 21
    const [codeLines,setCodeLines] = useState<string[]>(["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a",])
    const [lineNum,setLineNum] = useState<number>(codeLines.length)
    useEffect(()=>{
        setLineNum(codeLines.length)
    },[codeLines])
    return(
        <div className="EditorSpaceMain">
            <div className="EditorSpaceMainLeftWarp">
                <div className="EditorSpaceMainLeft">
                    {codeLines.map((i,index)=>{
                        return (
                            <div className="EditorSpaceLineNumberWarp">
                            <span className="EditorSpaceLineNumber">{index+1}</span>     
                            </div>
                        )
                    })}          
                </div>
            </div>
            <div className="EditorSpaceMainRight">
                    <textarea style={{height:`${lineHeight*lineNum}px`}} className="EditorSpaceMainEditArea"></textarea>
            </div>
        </div>
    )   
}

export default EditorSpaceMain