import './checkbox-filter.css';

const CheckBoxFilter = ({ checkboxItems }) => {
  return (
    <fieldset className="checkbox-filter">
        {checkboxItems.map(c => (
          !c.hidden ? 
            <label key={c.id}>
              <span>
                { c.name }
              </span>
              <input type="checkbox" value={c.id} />
            </label>
          : ""
        ))}
    </fieldset>
  );
}
 
export default CheckBoxFilter;