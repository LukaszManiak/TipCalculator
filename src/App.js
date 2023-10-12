import { useState } from "react";

const tipOptions = [5, 10, 15, 25, 50];

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState("");

  function handleBillChange(e) {
    setBill(+e.target.value);
  }

  function handleTipChange(val) {
    setTip(val);
    console.log(tip);
  }
  function handleNumberOfPeople(e) {
    setNumberOfPeople(+e.target.value);
  }

  let totalPerPerson = 0;
  let tipPerPerson = 0;
  let tipAmount = bill * (0.1 * tip);
  let total = tipAmount + bill;
  tipPerPerson = tipAmount / numberOfPeople;
  totalPerPerson = total / numberOfPeople;

  function handleReset() {
    setTip(0);
    setBill(0);
    setNumberOfPeople("");
  }

  return (
    <>
      <div className="spliter-tag">
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>

      <div className="spliter-container">
        <LeftSide
          bill={bill}
          numberOfPeople={numberOfPeople}
          onBillChange={handleBillChange}
          onTipChange={handleTipChange}
          onPeopleChange={handleNumberOfPeople}
          tipOptions={tipOptions}
        />
        <RightSide
          tipPerPerson={tipPerPerson}
          totalPerPerson={totalPerPerson}
          onReset={handleReset}
        />
      </div>
    </>
  );
}

// /* left side */

function LeftSide({
  bill,
  numberOfPeople,
  onBillChange,
  onPeopleChange,
  onTipChange,
  tipOptions,
}) {
  const [curOpen, setCurOpen] = useState(null);
  const [customTip, setCustomTip] = useState("");

  function handleCustomTip(e) {
    setCustomTip(+e.target.value);
    console.log(customTip);
  }

  function printData(key) {
    setCurOpen(key);
    console.log(curOpen);
  }

  return (
    <div className="left-side">
      <div>
        <p>Bill</p>
        <input
          className="input"
          type="text"
          placeholder="0"
          value={bill}
          onChange={(e) => onBillChange(e)}
        />
      </div>
      <div>
        <p>Select Tip %</p>
        <div className="tip-options">
          {tipOptions.map((tip) => (
            <TipButton key={tip} onHandleClick={onTipChange} num={tip}>
              {tip}%
            </TipButton>
          ))}

          <input
            className={`tip-input`}
            type="text"
            placeholder="custom"
            onClick={() => printData("custom")}
            onChange={(e) => handleCustomTip(e)}
          />
        </div>
      </div>

      <div>
        <div>
          <p>Number of People</p>
          <p className={numberOfPeople === 0 ? "" : "hidden"}>Can't be zero</p>
        </div>
        <input
          className="input"
          type="text"
          placeholder="0"
          value={numberOfPeople}
          onChange={(e) => onPeopleChange(e)}
        />
      </div>
    </div>
  );
}

function TipButton({ num, children, onHandleClick }) {
  return (
    <button className="tip-option" onClick={() => onHandleClick(num)}>
      {children}
    </button>
  );
}

//   /* right side */

function RightSide({ totalPerPerson, tipPerPerson, onReset }) {
  return (
    <div className="right-side">
      <div>
        {/* tip amount */}
        <div className="result-container">
          <div>
            <p>Tip amount</p>
            <p>/ person</p>
          </div>

          <p className="tip">${tipPerPerson ? tipPerPerson : "0.00"}</p>
        </div>
        {/* total */}
        <div className="result-container">
          <div>
            <p>Total</p>
            <p>/ person</p>
          </div>

          <p className="tip">${totalPerPerson ? totalPerPerson : "0.00"}</p>
        </div>
      </div>
      <button onClick={() => onReset()} className="reset-btn">
        RESET
      </button>
    </div>
  );
}

export default App;
