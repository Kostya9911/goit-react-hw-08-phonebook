import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { changeFilter } from 'Redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = evt => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  return (
    <label className={css.label_filter}>
      Find contact by name
      <input
        className={css.input_filter}
        autoComplete="off"
        type="text"
        name="filter"
        onChange={handleChangeFilter}
      />
    </label>
  );
};
