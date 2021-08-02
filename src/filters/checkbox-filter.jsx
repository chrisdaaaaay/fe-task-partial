import './checkbox-filter.css';

const CheckBoxFilter = ({ checkboxItems }) => {
  return (
    <fieldset className="checkbox-filter">
        {checkboxItems.map(c => (
          <label>
            <span>
              { c.name }
            </span>
            <input type="checkbox" key={c.id} value={c.id} />
          </label>
        ))}
    </fieldset>
  );
}
 
export default CheckBoxFilter;