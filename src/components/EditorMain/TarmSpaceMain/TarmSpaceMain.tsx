import React, { useEffect, useRef, useState } from "react";
import "./TarmSpaceMain.css"
import { termMode } from "../../../interface/termMode";

function TarmSpaceMain(){
    const [inputFirstText,setInputFirstText] = useState<string>("command>")
    const [nowLine,setNowLine] = useState<string>(inputFirstText)
    const [nowCmd,setNowCmd] = useState<string>("")
    const [termTexts,setTermTexts] = useState<string[]>(["printText"])
    const inputRef = useRef<any>()
    const [logHeight,setLogHeight] = useState<number>(0)
    const [inputMode,setInputMode] = useState<termMode>({mode:"cmd"})
    const inputTermText = (e:any)=>{
        const next = e.target.value.slice(inputFirstText.length)
        setNowCmd(next)
        setNowLine(inputFirstText+next)
    }
    const changeLine = (e:any)=>{
        if (e.key === "Enter" && inputMode.mode === "cmd"){
            setTermTexts([...termTexts,nowLine])
            setNowLine("")
        }
    }
    const selectTermSpace = ()=>{
        inputRef.current.focus()
    }
    return (
        <>
        <div className="TermSpaceMain" onClick={selectTermSpace}>
            {termTexts.map((i,index)=>{
            return <><div className="termTextWarp"><span className="termText">{i}</span><br/></div></>
                // return index === termTexts.length-1?<div className="termTextWarp"><span className="termText">{i}</span><div className="termSpaceCursor"></div>
                // </div>:<div className="termTextWarp"><span className="termText">{i}</span><br/></div>
            })}
            <textarea spellCheck="false" contentEditable="true" className="termInputBox" style={{height:"50px"}} ref={inputRef} onKeyDown={changeLine} onChange={inputTermText} value={nowLine}></textarea>
            </div>
            {/* <textarea className="TermSpaceMainArea" onChange={(e)=>{inputTermText(e)}} value={nowLine}></textarea> */}
        </>
    )
}

export default TarmSpaceMain