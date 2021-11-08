import { useSelector, useDispatch } from 'react-redux';
import { contactsAction, contactsSelectors } from '../../redux/contacts';
import { Form } from 'react-bootstrap';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <Form.Control
      className={s.sort}
      type="text"
      name="filter"
      value={filter}
      onChange={e => dispatch(contactsAction.chengeFilter(e))}
      placeholder="Find contacts by name"
    />
  );
};

export default Filter;
