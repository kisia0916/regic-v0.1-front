import React from "react";
import "./DashboardMain.css"
import ProjectMain from "./ProjectMian/ProjectMain";
import NewButtonMain from "./NewButtonMain/NewButtonMain";
import MachineMain from "./MachineMain/MachineMain";

function DashboardMain(){
    return (
        <div className="dashboardMain">
            <div className="dashboardTopBar">
                <span className="dashboardTopBarTitle">Regic</span>
                <img src="./icon/zbnU2dcD_400x400 (1).jpg" className="dashboardTopBarMenue"/>
            </div>        
            <div className="dashboardTopBarSelect">
                <div className="dashboardTopSelectBar">
                    <div className="dashboardTopSelectBarWarp">
                        <div style={{width:"100%",display:"flex"}}>
                            <span className="dashboardTopSelectBarText">Projects</span>
                        </div>
                        <div className="dashboardTopSelectBarSelectBar selected"></div>
                    </div>
                </div>
                <div className="dashboardTopSelectBar">
                    <div className="dashboardTopSelectBarWarp">
                        <div style={{width:"100%",display:"flex"}}>
                            <span className="dashboardTopSelectBarText">Computer</span>
                        </div>
                        <div className="dashboardTopSelectBarSelectBar"></div>
                    </div>
                </div>
            </div>
            <div className="dashboardContentMain">
                    <NewButtonMain/>
                    <ProjectMain/>
                    <ProjectMain/>
                    <ProjectMain/>
                    <ProjectMain/>
                    <ProjectMain/>

            </div>
        </div>

    )
}

export default DashboardMain