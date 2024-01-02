import { useState } from "react";
import logoSvg from "../images/logo.svg";

import AttributionP from "./AttributionP";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import BillInput from "./BillInput";
import TipPrecentageInput from "./TipPrecentage";
import PeopleNumberInput from "./PeopleNumberInput";

const tipOptions = [5, 10, 15, 25, 50];

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [curOpen, setCurOpen] = useState(null);
  const [customTip, setCustomTip] = useState("custom");

  // custom tip handler
  function handleCustomTip(e) {
    const customTipValue = +e.target.value;
    setTip(null);
    setCustomTip(customTipValue);
    handleTipChange(customTipValue);
  }

  // current picked option
  function handleCurChange(key) {
    setTip(null);
    setCurOpen(key);
  }

  // bill change
  function handleBillChange(e) {
    setBill(+e.target.value);
  }

  // tip change
  function handleTipChange(val) {
    setTip(val);
  }
  // people number change
  function handleNumberOfPeople(e) {
    setNumberOfPeople(+e.target.value);
  }

  // tip and total per person
  let totalPerPerson = 0;
  let tipPerPerson = 0;
  let tipAmount = bill * (+tip / 100);
  let total = tipAmount + bill;
  tipPerPerson =
    numberOfPeople > 0 ? (tipAmount / numberOfPeople).toFixed(2) : 0;
  totalPerPerson = numberOfPeople > 0 ? (total / numberOfPeople).toFixed(2) : 0;

  // reset handler
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
      <img src={logoSvg} alt="logo" className="spliter-tag" />

      <AttributionP />

      <div className="spliter-container">
        {/* left side */}
        <LeftSide>
          <BillInput bill={bill} onBillChange={handleBillChange} />
          <TipPrecentageInput
            mainTip={tip}
            onTipChange={handleTipChange}
            customTip={customTip}
            onCurChange={handleCurChange}
            onCustomTip={handleCustomTip}
            tipOptions={tipOptions}
          />

          <PeopleNumberInput
            numberOfPeople={numberOfPeople}
            onPeopleChange={handleNumberOfPeople}
          />
        </LeftSide>
        {/* right side */}
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

export default App;
