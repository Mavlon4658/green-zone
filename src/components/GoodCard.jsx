import { useState } from "react"
import { Link } from "react-router-dom";
import IMAGES from "../assets/images"

export default function ({good}) {
    return (
        <li className="good__card_item">
            <div className="img">
                <img src={good.img} alt="" />
                <Link to={good.to}>ПОДРОБНЕЕ</Link>
                <span className={`alert_new ${good.new ? 'active' : ''}`}>новинка</span>
                <span className={`alert_discount ${good.discount ? 'active' : ''}`}>скидка</span>
            </div>
            <h3>
                <span className="name">{good.title}</span>
                <span className="price_wrap">
                    <span className={`discount ${good.discount ? 'active' : ''}`}>{good.discount}</span>
                    <span className={`price ${good.new ? 'new' : ''} ${good.discount ? 'through' : ''}`}>{good.price}</span>
                </span>
            </h3>
        </li>
    )
}