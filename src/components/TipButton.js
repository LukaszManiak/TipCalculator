export default function TipButton({ mainTip, num, children, onHandleClick }) {
  return (
    <button
      className={mainTip === num ? "selected-tip-option" : "tip-option"}
      onClick={() => onHandleClick(num)}
    >
      {children}
    </button>
  );
}
