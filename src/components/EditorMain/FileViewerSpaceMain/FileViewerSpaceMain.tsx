import React, { useEffect, useState } from "react";
import "./FileViewerSpaceMain.css"
import FileViewerFolderMain from "./FileViewerFolder/FileViewerFolderMain";
import FileViewerFileMain from "./FileViewerFile/FileViewerFileMain";
import FileIndentSpace from "./FileIndentSpace/FileIndentSpaceMain";
import { createFileStructure } from "./createFileStructureMain";

function FileViewerSpaceMain(){
    const [fileStructure,setFileStructure] = useState<any>(["hikakin","seikin",["test"],["test",["tset"]]])
    const [fileStructureContent,setFileStructureContent] = useState<React.ReactNode[]>([])
    useEffect(()=>{
        //ファイル構造生成
        let floorCounter:number = 0
        let returnElement:any =  []
        console.log("hel")
        const structureData:any = createFileStructure(fileStructure,getElements.Indent,getElements.folder,getElements.file)
        if (structureData){
            setFileStructureContent(structureData)
        }
    },[])
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