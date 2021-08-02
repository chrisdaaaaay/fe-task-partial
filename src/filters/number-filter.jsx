import './number-filter.css';

const NumberFilter = ({ labelText, min, max, step, value, onFilterChanged }) => {
  return (
    <label className="number-filter">
      <span>{labelText}</span>
      {/* All three events are required, using onChange alone results in an error where the previous value is emitted */}
      <input onChange={onFilterChanged} onKeyUp={onFilterChanged} onMouseUp={onFilterChanged} type="number" min={min} max={max} step={step} value={value} />
    </label>
  );
}
 
export default NumberFilter;