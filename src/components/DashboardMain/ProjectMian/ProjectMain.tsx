import React from "react";
import "./ProjectMain.css"

function ProjectMain(){
    return (
        <div className="projectMain">
            <div className="projectMainLeft">
                <img src="/icon/code_line (1).svg" className="projectMainIcon"/>
            </div>
            <div className="projectMainRight">
                <span className="projectMainTitle">Project Main</span>
                <span className="projectInfo">4kb 2024/09/16</span>
            </div>
        </div>
    )
}

export default ProjectMain