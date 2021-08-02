import './checkbox-filter.css';

const CheckBoxFilter = ({ checkboxItems, onFilterChanged }) => {

  
  return (
    <fieldset className="checkbox-filter">
        {checkboxItems.map(c => (
          !c.hidden ? 
            <label key={c.id}>
              <span>
                { c.name }
              </span>
              <input onChange={onFilterChanged} type="checkbox" value={c.id} name="checkbox-filter-ids" />
            </label>
          : ""
        ))}
    </fieldset>
  );
}
 
export default CheckBoxFilter;