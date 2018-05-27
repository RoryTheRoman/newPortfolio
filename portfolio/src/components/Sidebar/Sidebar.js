import React from "react";
import "./Sidebar.css";

const Sidebar = props => {

    return(
        <div className="sidebar">
            <div className="card sidebar-card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
                    <p className="text-left pOne">{props.pOne}</p>
                    <p className="text-left pTwo">{props.pTwo}</p>
                    <p className="text-left pThree">{props.pThree}</p>
                    <p className="text-left pFour">{props.pFour}</p>
                    <p className="text-left pFive">{props.pFive}</p>
                </div>
            </div>

        </div>

    )



}

export default Sidebar;