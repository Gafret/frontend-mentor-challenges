import './CardInputs.css';

export default function CardInputs({onInput, cardInfo}){
    function handleChange(e){
        let target = e.target;
        let data = target.value;
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
                data = data.toString();
                data = formatCardNumber(data);
                target.value = data;
                onInput(
                    {
                        ...cardInfo,
                        cardNumber: target.value
                    }
                );
                break;
            case "expM":
                data = data.toString();
                data = formatDate(data);
                target.value = parseInt(data);
                onInput(
                    {
                        ...cardInfo,
                        expM: target.value
                    }
                );
                break;
            case "expY":
                data = data.toString();
                data = formatDate(data);
                target.value = parseInt(data);
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
                <input type="text" id="card-number" className="card-form__input" name="card-number" required="true"></input>

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
    if(number.length > 16){
        return false;
    }
    return true;
}

function formatCardNumber(number){
    let res = number;
    if(!validateCardNumber(number)){
        res = number.slice(0, 15);
        let output = [];
        for(let i=0; i<=res.length; i++){
            if(i % 4 === 0){
                output.push(" ");
            }
            output.push(res[i]);
        }
        res = output.join("");
        console.log(res);
        return res;
    }
    return res;
}

function validateDate(date){
    if(date.length > 2){
        return false;
    }
    return true;
}

function formatDate(date){
    if(!validateDate(date)){
        return date.slice(0, 1);
    }
    return date;
}