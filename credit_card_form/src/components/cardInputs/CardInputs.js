import './CardInputs.css';

export default function CardInputs({onInput, cardInfo}){
    function handleChange(e){
        let target = e.target;
        console.log(target)
        switch(target.name){
            case "cardholder":
                onInput(
                    {
                        ...cardInfo,
                        cardholder: target.value
                    }
                );
                break;
            case "card-number":
                onInput(
                    {
                        ...cardInfo,
                        cardNumber: target.value
                    }
                );
                break;
            case "expM":
                onInput(
                    {
                        ...cardInfo,
                        expM: target.value
                    }
                );
                break;
            case "expY":
                onInput(
                    {
                        ...cardInfo,
                        expY: target.value
                    }
                );
                break;
            case "cvc":
                onInput(
                    {
                        ...cardInfo,
                        cvc: target.value
                    }
                );
                break;
            default:
                throw new Error("No such data in card");
        }
    }

    return (
        <div className="sm-width lg-height align-vertically">
            <form className="card-form" onChange={handleChange}>

                <label for="cardholder-name">cardholder name</label>
                <input id="cardholder-name" className="card-form__input" name="cardholder" required="true"></input>
                <label for="card-number">card number</label>
                <input type="number" id="card-number" className="card-form__input" name="card-number" required="true"></input>

                <div className="card-form__input-group">

                    <div className="md-width">
                        <label className="block fc-width" for="exp-date">exp. date (mm/yy)</label>
                        <input type="number" id="exp-date" className="card-form__input card-form__input_md" name="expM" required="true"></input>
                        <input type="number" className="card-form__input card-form__input_md sm-l-margin" name="expY" required="true"></input>
                    </div>

                    <div className="sm-l-margin  md-width">
                        <label className="block fc-width" for="cvc">cvc</label>
                        <input type="number" id="cvc" className="card-form__input" name="cvc" required="true"></input>
                    </div>

                </div>

                <button className="card-form__submit">Confirm</button>
            </form>
        </div>
        
    )
}

function validateCardNumber(number){

}

function formatCardNumber(number){
    
}