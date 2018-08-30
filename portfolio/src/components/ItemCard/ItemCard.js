import React from "react";
import "./ItemCard.css";
// import {Link} from "react-router-dom";


const ItemCard = props => (
    <div className="container">
        {/* <a onClick={() => props.clickedImage(props.id)}> */}
        <div className="card item-card" onClick={props.click}>
                <img className="card-img-top" src={props.image} alt={props.name} />
            <div className="card-body">
                <p className="card-text">{props.name}</p>
            </div>
        </div>
        {/* </a> */}
    </div>
)


export default ItemCard;