import {useState} from "react"
import './App.css';

function App() {

const [minValue,setMinValue] = useState(0);
const [maxValue,setMaxValue] = useState(10);
const [randomNumber,setRandomNumber] = useState(5);

const ClickFunction = () =>{
  setRandomNumber(Math.floor(Math.random()*(maxValue-minValue+1)+minValue))
}





  return (
    <div className="text">WELLCOME TO THE RANDOM NUMBER CALCULATOR
    <div className="App">
      <div className="container">
        <div className="randomNum">
          <p>Random Number : <span>{randomNumber}</span></p>
        </div>
        <div className="numContainer">
          <div>
            <p>Minimum :</p>
            <input type = "number" value = {minValue} onChange={e => setMinValue(+e.target.value)}/>
          </div>
          <div>
            <p>Maximum :</p>
            <input type = "number" value = {maxValue} onChange={e => setMaxValue(+e.target.value)}/>
          </div>
          <button className="button" onClick={ClickFunction}>Get Random Number</button>
        </div>
      </div>
      
    </div>
    </div>
  );
}

export default App;
