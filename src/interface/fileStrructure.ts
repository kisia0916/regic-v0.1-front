import { StringMappingType } from "typescript";

export interface fileStructureInterface {
    indent:number,
    type:string
    name:string,
    str:number[]
}
export interface folderStructureInterface{
    indent:number,
    type:string,
    name:string,
    status:"open"|"close",
    str:number[]
}