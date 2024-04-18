import React from "react"
import FileViewerFileMain from "./FileViewerFile/FileViewerFileMain";
import FileViewerFolderMain from "./FileViewerFolder/FileViewerFolderMain";
import { DefaultDeserializer } from "v8";

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
        if (i.type === "folder"){
            let topSpace:React.ReactNode[] = []
            for (let k = 0;floorCounter>k;k++){
                topSpace.push(FileIndent())
            }
            returnElement.push(
                [topSpace,FileViewerFolder("folderMain")]
            )
            if (i.status === "open"){
                floorCounter+=1
                createFileStructure(i.content,FileIndent,FileViewerFolder,FileViewerFile)
            }
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

export const openFile = (structure:any,conIndex:number[]):{type:"file",name:string}=>{
    let returnData:{type:"file",name:string,id:number} = {type:"file",name:"",id:0} 
    let nowContet:any;
    conIndex.forEach((i:number,index:number)=>{
        if (index !== 0){
            console.log(nowContet)
            if (nowContet[i].type === "file"){
                returnData = nowContet[i]
            }else{nowContet = nowContet[i].content}
        }else{
            if (structure[i].type === "file"){
                returnData = structure[i]
            }else{
                console.log(structure[i].content)
                nowContet = structure[i].content
            }
        }
    })
    return returnData
}