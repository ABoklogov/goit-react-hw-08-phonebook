import { useSelector, useDispatch } from 'react-redux';
import { contactsAction, contactsSelectors } from '../../redux/contacts';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.sort}>
      <span className={s.sortText}>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(contactsAction.chengeFilter(e))}
      />
    </label>
  );
};

export default Filter;
