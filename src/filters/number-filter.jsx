import './number-filter.css';

const NumberFilter = ({ labelText, min, max, step, value, onFilterChanged }) => {
  return (
    <label className="number-filter">
      <span>{labelText}</span>
      <input onChange={onFilterChanged} onKeyUp={onFilterChanged} onMouseUp={onFilterChanged} type="number" min={min} max={max} step={step} value={value} />
    </label>
  );
}
 
export default NumberFilter;