import React from "react";
import "./MachineMain.css"

function MachineMain(){
    return (
        <div className="machineMain">
            <div className="machineMainWarp">
                <div className="machineMainLeft">
                    <img src="/icon/server_fill (1).svg" className="machineMainIcon"/>
                </div>
                <div className="machineMainRight">
                    <span className="machineMainName">Computer 1</span>
                </div>
            </div>
            <div className="machineMainLine"></div>
            <div className="machineMainBottom">
                <div className="machineMainStatus">
                    <img src="/icon/chip_line (1).svg" className="machineMainStatusCpuIcon"/>
                    <span className="machineMainStatusText">100%</span>
                </div>
                <div className="machineMainStatus">
                    <img src="/icon/barcode_line.svg" className="machineMainStatusCpuIcon"/>
                    <span className="machineMainStatusText">100%</span>
                </div>
                <div className="machineMainStatus">
                    <img src="/icon/signal_line (1).svg" className="machineMainStatusCpuIcon"/>
                    <span className="machineMainStatusText">10ms</span>
                </div>
            </div>
        </div>
    )
}

export default MachineMain