import logo from './logo.svg';
import './App.css';
import CardInputs from './components/cardInputs/CardInputs';
import CardView from './components/cardView/CardView';
import {useState} from 'react';

let initialState = {
  cardholder:"Jane Appleseed",
  cardNumber:"0000 0000 0000 0000",
  expM:"11",
  expY:"25",
  cvc:"123"
}

function App() {
  let [cardInfo, setCardInfo] = useState(initialState);
  return (
    <div className="main-page">
      <CardView cardInfo={cardInfo}/>
      <CardInputs onInput={setCardInfo} cardInfo={cardInfo}/>
    </div>
  );
}

export default App;
