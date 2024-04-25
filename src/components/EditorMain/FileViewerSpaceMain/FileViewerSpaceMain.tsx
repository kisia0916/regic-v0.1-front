import React, { useEffect, useState } from "react";
import "./FileViewerSpaceMain.css"
import FileViewerFolderMain from "./FileViewerFolder/FileViewerFolderMain";
import FileViewerFileMain from "./FileViewerFile/FileViewerFileMain";
import FileIndentSpace from "./FileIndentSpace/FileIndentSpaceMain";
import { createFileStructure, createFileStructure2, createFileStructure3, openFile } from "./createFileStructureMain";
import { fileStructureInterface, folderStructureInterface } from "../../../interface/fileStrructure";
import { IndentStyle } from "typescript";
import AddFileButtonMain from "./AddFileButton/AddFileButtomMain";
import AddFolderButtonMain from "./AddFolderButton/AddFolderButtonMain";

function FileViewerSpaceMain(props:{viewerStatus:"open"|"close",changeStatus:any,projectStructure:any}){
    // const [fileStructure,setFileStructure] = useState<any>([{type:"file",name:"hikakin",id:[1]},
    //                                                         {type:"file",name:"seikin",id:[2]},
    //                                                         {type:"folder",status:"open",id:[3], content:[{type:"file",name:"seikin",id:[3,1]},
    //                                                                                               {type:"folder",status:"open", id:[3,2],content:[{type:"file",name:"file32",id:[3,2,1]}]}]},
    //                                                         {type:"folder",status:"open",content:["test"]}])
    // const [fileStructure,setFileStructure] = useState<any>([
    //     {id:1,indent:0,type:"file",name:"main.py",str:[]},
    //     {id:2,indent:0,type:"file",name:"sub.py",str:[]},
    //     {id:3,indent:0,type:"folder",name:"firstfolder",status:"open",str:[]},
    //     {id:4,indent:1,type:"file",name:"module.py",str:[3]},
    //     {id:5,indent:1,type:"folder",name:"firstfolder",status:"open",str:[3]},
    //   
    //   {id:6,indent:2,type:"file",name:"module.py",str:[3,5]},
    // ])
    const [folderStructure,setFolderStructure] = useState<any>(props.projectStructure.folder)
    const [fileStrructure,setFileStructure] = useState<any>(props.projectStructure.file)

    const [nowSelectFolder,setNowSelectFolder] = useState<fileStructureInterface|folderStructureInterface>()
    const [fileStructureContent,setFileStructureContent] = useState<React.ReactNode[]>([])
    const changeFolderState = (e:any)=>{
        const nowStructure = [...folderStructure]
        console.log(e.currentTarget.id)
        const contentIndex = folderStructure.findIndex((i:any)=>i.folderId === e.currentTarget.id)
        if (folderStructure[contentIndex].status === "open"){
            nowStructure[contentIndex].status = "close"
        }else{
            nowStructure[contentIndex].status = "open"
        }
        console.log(nowStructure)
        setFileStructure(nowStructure)
    }
    useEffect(()=>{
        //ファイル構造生成]
        console.log(props.projectStructure)
        // const structureData:any = createFileStructure2(fileStructure,getElements.Indent,getElements.folder,getElements.file)
        const structureData:any = createFileStructure3(fileStrructure,folderStructure,getElements.Indent,getElements.folder,getElements.file)
        console.log(structureData)
        if (structureData){
            setFileStructureContent(structureData)
        }
    },[fileStrructure,folderStructure,])
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
                <div className="fileViewerNewButtons">
                    <AddFileButtonMain/>
                    <AddFolderButtonMain/>
                </div>
                <div className="FileViewerSpaceBottom">
                    <div className="FileViewerSpaceWarp">
                        {fileStructureContent.map((i:any,index:number)=>{
                            let indent = i[0].map((x:any)=>{
                                return x
                            })
                            return i[2] === 'folder'?<div style={{display:"flex"}} id={i[3]} onClick={changeFolderState}>
                                {indent}
                                {i[1]}
                            </div>:<div style={{display:"flex"}} id={`fileViewerIndex:${index}`}>
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