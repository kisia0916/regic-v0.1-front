import React, { useEffect, useState } from "react";
import "./FileViewerSpaceMain.css"
import FileViewerFolderMain from "./FileViewerFolder/FileViewerFolderMain";
import FileViewerFileMain from "./FileViewerFile/FileViewerFileMain";
import FileIndentSpace from "./FileIndentSpace/FileIndentSpaceMain";
import { createFileStructure, createFileStructure2, openFile } from "./createFileStructureMain";
import { fileStructureInterface, folderStructureInterface } from "../../../interface/fileStrructure";

function FileViewerSpaceMain(props:{viewerStatus:"open"|"close",changeStatus:any}){
    // const [fileStructure,setFileStructure] = useState<any>([{type:"file",name:"hikakin",id:[1]},
    //                                                         {type:"file",name:"seikin",id:[2]},
    //                                                         {type:"folder",status:"open",id:[3], content:[{type:"file",name:"seikin",id:[3,1]},
    //                                                                                               {type:"folder",status:"open", id:[3,2],content:[{type:"file",name:"file32",id:[3,2,1]}]}]},
    //                                                         {type:"folder",status:"open",content:["test"]}])
    const [fileStructure,setFileStructure] = useState<any>([
        {indent:0,type:"file",name:"main.py",str:[]},
        {indent:0,type:"file",name:"sub.py",str:[]},
        {indent:0,type:"folder",name:"firstfolder",status:"open",str:[]},
        {indent:1,type:"file",name:"module.py",str:[2]},
        {indent:1,type:"folder",name:"firstfolder",status:"open",str:[2]},
        {indent:2,type:"file",name:"module.py",str:[2,4]},
    ])
    const [nowSelectFolder,setNowSelectFolder] = useState<fileStructureInterface|folderStructureInterface>()
    const [fileStructureContent,setFileStructureContent] = useState<React.ReactNode[]>([])
    const changeFolderState = (e:any)=>{
        const nowStructure = [...fileStructure]
        console.log(e.currentTarget.id)
        const contentIndex:number = e.currentTarget.id.split(":")[1] as number
        if (fileStructure[contentIndex].type === "folder"){
            console.log("hello")
            if (fileStructure[contentIndex].status === "open"){
                nowStructure[contentIndex].status = "close"
            }else{
                nowStructure[contentIndex].status = "open"
            }
        }
        console.log(nowStructure)
        setFileStructure(nowStructure)
    }
    useEffect(()=>{
        //ファイル構造生成]
        const structureData:any = createFileStructure2(fileStructure,getElements.Indent,getElements.folder,getElements.file)
        console.log(structureData)
        if (structureData){
            setFileStructureContent(structureData)
        }
    },[fileStructure])
    const getElements = {
        file:():React.ReactNode=>{
            return <FileViewerFileMain/>
        },
        folder:(name:string):React.ReactNode=>{
            return <FileViewerFolderMain folderName={name} status="open"/>
        },
        Indent:():React.ReactNode=>{
            return <FileIndentSpace/>
        }
    }
    return (
        <>
            {props.viewerStatus === "open"?
                <div className="FileViewerSpaceMain">
                <div className="FileViewerSpaceTop">
                    <img src="/icon/menu_line.svg" alt="" className="FileViewerSpaceMenuIcon" onClick={()=>props.changeStatus()}/>
                    <span className="fileViewerSpaceProjectName">Regic-v0.1-beta</span>
                </div>
                <div className="FileViewerSpaceBottom">
                    <div className="FileViewerSpaceWarp">
                        {fileStructureContent.map((i:any,index:number)=>{
                            let indent = i[0].map((x:any)=>{
                                return x
                            })
                            return <div style={{display:"flex"}} id={`fileViewerIndex:${index}`} onClick={changeFolderState}>
                                {indent}
                                {i[1]}
                            </div>
                        })}
                    </div>
                </div>
            </div>
        :<></>}
    </>
    )
}

export default FileViewerSpaceMain