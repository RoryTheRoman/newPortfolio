import React from "react";
import "./ItemCard.css";
import {Link} from "react-router-dom";


const ItemCard = props => (
    <div>
        {/* <a onClick={() => props.imageClick(props.id)}> */}
        <Link to={"/Works/" + props.id} >
        <div className="card item-card">
                <img className="card-img-top" src={props.image} alt={props.name} />
            <div className="card-body">
                <p className="card-text">{props.name}</p>
            </div>
        </div>
        {/* </a> */}
        </Link>
    </div>
)


export default ItemCard;