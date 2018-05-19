import React from "react";
import "./ItemCard.css";


const ItemCard = props => (
    <div className="container">
    <div className="card">
        <img className="card-img-top" src="http://blairoracle.com/wp-content/uploads/2017/12/6360558186414264051368652572_Computing_programming_and_coding_in_schools.jpg" alt="Card image cap" />
            <div className="card-body">
                <p className="card-text">Project Numbero Uno</p>
            </div>
    </div>
    </div>
)


export default ItemCard;