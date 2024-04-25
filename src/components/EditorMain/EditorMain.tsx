import React, { useEffect, useState } from "react";
import "./EditorMain.css"
import TarmSpaceMain from "./TarmSpaceMain/TarmSpaceMain";
import EditorSpaceMain from "./EditorSpaceMain/EditorSpaceMain";
import FileViewerSpaceMain from "./FileViewerSpaceMain/FileViewerSpaceMain";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

function EditorMain(){
    const [viewerStatus,setViewerStatus] = useState<"open"|"close">("close")
    const projectId:string|undefined = useParams().id
    const [cookies,setCookies] = useCookies()
    const [canWriteScreen,setCanWriteScreen] = useState<boolean>(false)
    const [projectStructure,setProjectStructure] = useState<any>()
    useEffect(()=>{
        axios.post("http://localhost:5000/project/projectmaindata/getprojectmain",{
            projectId:projectId,
            userId:cookies.userId,
            pass:cookies.pass
        }).then((res)=>{
            setCanWriteScreen(true)
            const getData = res.data
            console.log(res.data)
            setProjectStructure({
                folder:getData.folder,
                file:getData.file
            })
        }).catch((error)=>{
            
        })
    },[])
    const changeViewerStatus = ()=>{
        if (viewerStatus === "open"){
            setViewerStatus("close")
        }else{
            setViewerStatus("open")
        }
    }
    return (
        <>
        {canWriteScreen? 
        <div className="EditorMain">
        <div className="EditorContentMain">
            <div className="EditorMainTopBar">
                <img src="/icon/menu_line.svg"alt="" onClick={changeViewerStatus}/>
            </div>
            <TarmSpaceMain/>
            <EditorSpaceMain/>
        </div>
        <FileViewerSpaceMain viewerStatus={viewerStatus} changeStatus={setViewerStatus} projectStructure={projectStructure}/>
        </div>:<></>}
    </>
    )
}

export default EditorMain