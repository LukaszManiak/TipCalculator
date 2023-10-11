function App() {
  return (
    <>
      <div className="spliter-tag">
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>

      <SplitterCalc />
    </>
  );
}

function SplitterCalc() {
  return (
    <>
      {/* main container */}
      <div className="spliter-container">
        {/* left side */}
        <div className="left-side">
          <div>
            <p>Bill</p>
            <input type="number" value={0} />
          </div>
          <div>
            <p>Select Tip %</p>
            <div className="tip-options">
              <input className="tip-option" type="button" value={5} />
              <input className="tip-option" type="button" value={10} />
              <input className="tip-option" type="button" value={15} />
              <input className="tip-option" type="button" value={25} />
              <input className="tip-option" type="button" value={50} />
              <input
                className="tip-option"
                type="number"
                placeholder="custom"
              />
            </div>
          </div>

          <div>
            <div>
              <p>Number of People</p>
              <p className="hidden">Can't be zero</p>
            </div>
            <input type="number" value={0} />
          </div>
        </div>

        {/* right side */}
        <div className="right-side">
          <div>
            {/* tip amount */}
            <div className="result-container">
              <div>
                <p>Tip amount</p>
                <p>/ person</p>
              </div>

              <p className="tip">$0.00</p>
            </div>
            {/* total */}
            <div className="result-container">
              <div>
                <p>Total</p>
                <p>/ person</p>
              </div>

              <p className="tip">$0.00</p>
            </div>
          </div>
          <button className="reset-btn">RESET</button>
        </div>
      </div>
    </>
  );
}

export default App;
