import React from "react"
import FileViewerFileMain from "./FileViewerFile/FileViewerFileMain";
import FileViewerFolderMain from "./FileViewerFolder/FileViewerFolderMain";

let returnElement:any =  []
let mainStructure:any[] = []
let doneCo:boolean = false
let startGene:boolean = false
let floorCounter:number = 0


export const createFileStructure = (fileStructure:any,FileIndent:()=>React.ReactNode,FileViewerFolder:(name:string)=>React.ReactNode,FileViewerFile:()=>React.ReactNode)=>{
    let hostLoopFlg:boolean = false
    if (mainStructure.length === 0){
        mainStructure = fileStructure
    }
    if (!startGene){
        hostLoopFlg = true
        startGene = true
        returnElement = []
    }
    console.log(fileStructure)
    fileStructure.forEach((i:any,index:number)=>{
        if (hostLoopFlg){
            floorCounter = 0
        }
        if (typeof i === "object"){
            let topSpace:React.ReactNode[] = []
            for (let k = 0;floorCounter>k;k++){
                topSpace.push(FileIndent())
            }
            returnElement.push(
                [topSpace,FileViewerFolder("folderMain")]
            )
            floorCounter+=1
            createFileStructure(i,FileIndent,FileViewerFolder,FileViewerFile)
        }else{
            console.log(hostLoopFlg)
            let topSpace:React.ReactNode[] = []
            for (let k = 0;floorCounter>k;k++){
                topSpace.push(FileIndent())
            }
            returnElement.push(
                [topSpace,FileViewerFile()]
            )
        }
        if (index === mainStructure.length-1 && hostLoopFlg){
            mainStructure = []
            doneCo = true
        }
    })
    if (doneCo){
        doneCo = false
        startGene = false
        floorCounter = 0
        return returnElement
    }
}