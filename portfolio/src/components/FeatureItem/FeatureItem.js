import React from "react";
import "./FeatureItem.css";

const FeatureItem = props => (
    <div className="container">
        <div className="row">
            <div className="col-8 feature-item">
                <div className="card">
                    <img className="card-img" src="http://blairoracle.com/wp-content/uploads/2017/12/6360558186414264051368652572_Computing_programming_and_coding_in_schools.jpg" alt={props.name} />
                </div>
            </div>
        </div>
    </div>



);

export default FeatureItem;