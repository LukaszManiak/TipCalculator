export default function PeopleNumberInput({ numberOfPeople, onPeopleChange }) {
  return (
    <div>
      <div className="people-label">
        <p className="number-people">Number of People</p>
        <p className={numberOfPeople === 0 ? "red" : "hidden"}>Can't be zero</p>
      </div>
      <input
        className={numberOfPeople === 0 ? "red-input" : "input-people"}
        type="number"
        placeholder="0"
        value={numberOfPeople}
        onChange={(e) => onPeopleChange(e)}
      />
    </div>
  );
}
