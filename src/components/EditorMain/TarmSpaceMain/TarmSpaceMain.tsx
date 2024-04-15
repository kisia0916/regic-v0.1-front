import React, { useState } from "react";
import "./TarmSpaceMain.css"

function TarmSpaceMain(){
    const [inputFirstText,setInputFirstText] = useState<string>("firstText:")
    const [nowLine,setNowLine] = useState<string>(inputFirstText)
    const [nowCmd,setNowCmd] = useState<string>("")
    const [termTexts,setTermTexts] = useState<string[]>([])
    
    const inputTermText = (e:any)=>{
        const next = e.target.value.slice(inputFirstText.length)
        setNowCmd(next)
        setNowLine(inputFirstText+next)
    }
    const changeLine = (e:any)=>{
        if (e.key === "Enter"){
            setTermTexts([...termTexts,nowLine])
            setNowLine("")
        }
    }
    return (
        <>
        <div className="TermSpaceMain">
                {termTexts.map((i,index)=>{
                   return <><div className="termTextWarp"><span className="termText">{i}</span><br/></div></>
                    // return index === termTexts.length-1?<div className="termTextWarp"><span className="termText">{i}</span><div className="termSpaceCursor"></div>
                    // </div>:<div className="termTextWarp"><span className="termText">{i}</span><br/></div>
                })}
                <textarea contentEditable="true" className="termInputBox" style={{height:`calc(100% - ${25*termTexts.length}px`}} onKeyDown={changeLine} onChange={inputTermText} value={nowLine}></textarea>
            </div>
            {/* <textarea className="TermSpaceMainArea" onChange={(e)=>{inputTermText(e)}} value={nowLine}></textarea> */}
        </>
    )
}

export default TarmSpaceMain