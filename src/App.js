import { useState } from "react";

const tipOptions = [5, 10, 15, 25, 50];

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [curOpen, setCurOpen] = useState(null);
  const [customTip, setCustomTip] = useState("custom");

  function handleCustomTip(e) {
    const customTipValue = +e.target.value;
    setTip(null);
    setCustomTip(customTipValue);
    handleTipChange(customTipValue);
  }

  function handleCurChange(key) {
    setTip(null);
    setCurOpen(key);
  }

  function handleBillChange(e) {
    setBill(+e.target.value);
  }

  function handleTipChange(val) {
    setTip(val);
  }
  function handleNumberOfPeople(e) {
    setNumberOfPeople(+e.target.value);
  }

  let totalPerPerson = 0;
  let tipPerPerson = 0;
  let tipAmount = bill * (0.1 * tip);
  let total = tipAmount + bill;
  tipPerPerson =
    numberOfPeople > 0 ? (tipAmount / numberOfPeople).toFixed(2) : 0;
  totalPerPerson = numberOfPeople > 0 ? (total / numberOfPeople).toFixed(2) : 0;

  function handleReset() {
    setTip(0);
    setBill(0);
    setNumberOfPeople("");
    setCustomTip("custom");
    setCurOpen(null);
    totalPerPerson = 0;
    tipPerPerson = 0;
  }

  return (
    <>
      <div className="spliter-tag">
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <p className="attribution-p">
        Challenge by{" "}
        <a
          className="attribution-link"
          href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX"
        >
          Frontend Mentor
        </a>
        .Coded by{" "}
        <a className="attribution-link" href="https://github.com/LukaszManiak">
          Łukasz Maniak
        </a>
        .
      </p>

      <div className="spliter-container">
        <LeftSide
          bill={bill}
          numberOfPeople={numberOfPeople}
          onBillChange={handleBillChange}
          onTipChange={handleTipChange}
          onPeopleChange={handleNumberOfPeople}
          tipOptions={tipOptions}
          mainTip={tip}
          onCurChange={handleCurChange}
          onCustomTip={handleCustomTip}
          customTip={customTip}
          curOpen={curOpen}
        />
        <RightSide
          tipPerPerson={tipPerPerson}
          totalPerPerson={totalPerPerson}
          onReset={handleReset}
          numberOfPeople={numberOfPeople}
          bill={bill}
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
  onCurChange,
  onCustomTip,
  customTip,
  mainTip,
  curOpen,
}) {
  return (
    <div className="left-side">
      <div>
        <p>Bill</p>
        <input
          className="input"
          type="number"
          placeholder="0"
          value={bill}
          onChange={(e) => onBillChange(e)}
        />
      </div>
      <div>
        <p>Select Tip %</p>
        <div className="tip-options">
          {tipOptions.map((tip) => (
            <TipButton
              mainTip={mainTip}
              key={tip}
              onHandleClick={onTipChange}
              num={tip}
            >
              {tip}%
            </TipButton>
          ))}

          <input
            className={
              mainTip === customTip ? "selected-tip-input" : "tip-input"
            }
            type="number"
            placeholder="custom"
            value={customTip}
            onClick={() => onCurChange("custom")}
            onChange={(e) => onCustomTip(e)}
          />
        </div>
      </div>

      <div>
        <div className="people-label">
          <p>Number of People</p>
          <p className={numberOfPeople === 0 ? "red" : "hidden"}>
            Can't be zero
          </p>
        </div>
        <input
          className="input"
          type="number"
          placeholder="0"
          value={numberOfPeople}
          onChange={(e) => onPeopleChange(e)}
        />
      </div>
    </div>
  );
}

function TipButton({ mainTip, num, children, onHandleClick }) {
  return (
    <button
      className={mainTip === num ? "selected-tip-option" : "tip-option"}
      onClick={() => onHandleClick(num)}
    >
      {children}
    </button>
  );
}

//   /* right side */

function RightSide({
  numberOfPeople,
  bill,
  totalPerPerson,
  tipPerPerson,
  onReset,
}) {
  return (
    <div className="right-side">
      <div>
        {/* tip amount */}
        <div className="result-container">
          <div>
            <p className="result-header-p">Tip amount</p>
            <p className="per-person-p">/ person</p>
          </div>

          <p className="tip">${+tipPerPerson ? +tipPerPerson : "0.00"}</p>
        </div>
        {/* total */}
        <div className="result-container">
          <div>
            <p className="result-header-p">Total</p>
            <p className="per-person-p">/ person</p>
          </div>

          <p className="tip">${+totalPerPerson ? +totalPerPerson : "0.00"}</p>
        </div>
      </div>
      <button
        disabled={!(numberOfPeople !== "" && bill !== 0)}
        onClick={() => onReset()}
        className="reset-btn"
      >
        RESET
      </button>
    </div>
  );
}

export default App;
