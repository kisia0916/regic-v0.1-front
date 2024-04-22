import React from "react";
import "./AddFileButtonMain.css"

function AddFileButtonMain(){
    return (
        <div className="AddFileButtonMain">
            <div className="AddFileButtonWarp">
                <img src="/icon/file_new_fill.svg" alt="" className="AddFileButtonIcon"/>
                <span className="AddFileButtonText">New File</span>
            </div>
        </div>
    )
}

export default AddFileButtonMain