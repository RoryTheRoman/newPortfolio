import React from "react";
import "./FeatureItem.css";

const FeatureItem = props => (
    <div className="container" onClick={props.click}>
        <div className="row">
            <div className="col-8 feature-item">
                <div className="card">
                    <img className="card-img" src={props.image} alt={props.name} />
                </div>
            </div>
        </div>
    </div>



);

export default FeatureItem;