import React, { useEffect, useState } from "react";
import "./FileViewerSpaceMain.css"
import FileViewerFolderMain from "./FileViewerFolder/FileViewerFolderMain";
import FileViewerFileMain from "./FileViewerFile/FileViewerFileMain";
import FileIndentSpace from "./FileIndentSpace/FileIndentSpaceMain";
import { createFileStructure, openFile } from "./createFileStructureMain";

function FileViewerSpaceMain(){
    // const [fileStructure,setFileStructure] = useState<any>([{type:"file",name:"hikakin",id:[1]},
    //                                                         {type:"file",name:"seikin",id:[2]},
    //                                                         {type:"folder",status:"open",id:[3], content:[{type:"file",name:"seikin",id:[3,1]},
    //                                                                                               {type:"folder",status:"open", id:[3,2],content:[{type:"file",name:"file32",id:[3,2,1]}]}]},
    //                                                         {type:"folder",status:"open",content:["test"]}])
    const [fileStructure,setFileStructure] = useState<any>([
        {indent:0,type:"file",name:"main.py",str:[]},
        {indent:0,type:"file",name:"sub.py",str:[]},
        {indent:0,type:"folder",name:"firstfolder",status:"open",str:[]},
        {indent:1,type:"file",name:"module.py",str:[2]}
    ])
    const [fileStructureContent,setFileStructureContent] = useState<React.ReactNode[]>([])
    const changeFolderState = (targetIndex:number[])=>{
    }
    useEffect(()=>{
        console.log(openFile(fileStructure,[2,1,0]))
        //ファイル構造生成]
        const structureData:any = createFileStructure(fileStructure,getElements.Indent,getElements.folder,getElements.file)
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
        <div className="FileViewerSpaceMain">
            <div className="FileViewerSpaceTop">
                <span className="fileViewerSpaceProjectName">Regic-v0.1-beta</span>
            </div>
            <div className="FileViewerSpaceBottom">
                <div className="FileViewerSpaceWarp">
                    {fileStructureContent.map((i:any)=>{
                        let indent = i[0].map((x:any)=>{
                            return x
                        })
                        return <div style={{display:"flex"}}>
                            {indent}
                            {i[1]}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default FileViewerSpaceMain