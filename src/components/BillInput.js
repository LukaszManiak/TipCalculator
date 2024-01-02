export default function BillInput({ bill, onBillChange }) {
  return (
    <div>
      <p>Bill</p>
      <input
        className="input-bill"
        type="number"
        placeholder="0"
        value={bill}
        onChange={(e) => onBillChange(e)}
      />
    </div>
  );
}
