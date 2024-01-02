export default function RightSide({
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
