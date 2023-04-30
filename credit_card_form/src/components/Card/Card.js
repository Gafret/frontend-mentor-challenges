import "./Card.css";
import logo from "../../images/card-logo.svg";

export default function Card({side, number, holder, expiration, cvc}){
    let card;
    console.log( number)
    if(side === "front"){
        card = ( 
        <div className="card card_front">
            <div className="card__logo">
                <img src={logo}></img>
            </div>
            <div className="card__number">{number}</div>
            <div className="card__details">
                <p>{holder}</p>
                <p>{expiration}</p>
            </div>
        </div>
        );
    } 
    else if(side === "back"){
        card = (
        <div className="card card_back">
            <div className="card__cvc">{cvc}</div>
        </div>
        );
    } 
    else {
        throw new Error(`${side} isn't supported`);
    }
    return (
        card
    )
}