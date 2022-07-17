import React from "react";
import './Upload.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function UpLoad(){
    return(
        <>
            <div className="file-card">

                <div className="file-inputs">
                    <input className="inputUpload" type="file"/>
                    <button className="buttonUpLoad">
                        <i>
                        <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-up" />
                        </i>
                        Upload
                    </button>
                </div>

                <p className="main">Supported files</p>
                <p className="info">ONLY EXCEL</p>

            </div>
        </>
    );
}

export default UpLoad;