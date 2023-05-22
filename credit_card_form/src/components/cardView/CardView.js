import Card from "../Card/Card";
import "./CardView.css";

export default function CardView({cardInfo}){
    console.log(cardInfo);
    return (
        <div>
            <div className="card-container">
                <Card side="front" number={cardInfo["cardNumber"]} expiration={`${cardInfo["expM"]}/${cardInfo["expY"]} `} holder={cardInfo["cardholder"]}/>
                <Card side="back" cvc={cardInfo["cvc"]}/>
            </div> 
        </div>
    )
}