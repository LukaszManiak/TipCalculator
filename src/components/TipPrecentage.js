import TipButton from "./TipButton";

export default function TipPrecentageInput({
  mainTip,
  onTipChange,
  customTip,
  onCurChange,
  onCustomTip,
  tipOptions,
}) {
  return (
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
          className={mainTip === customTip ? "selected-tip-input" : "tip-input"}
          type="number"
          placeholder="custom"
          value={customTip}
          onClick={() => onCurChange("custom")}
          onChange={(e) => onCustomTip(e)}
        />
      </div>
    </div>
  );
}
