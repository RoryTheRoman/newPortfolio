import React from "react";
import "./ItemCard.css";


const ItemCard = props => (
    <div className="container">
        {/* <a onClick={() => props.handleClick(props.id)}> */}
        <div className="card item-card">
                <img className="card-img-top" src={props.image} alt={props.name} />
            <div className="card-body">
                <p className="card-text">{props.name}</p>
            </div>
        </div>
        {/* </a> */}
    </div>
)


export default ItemCard;