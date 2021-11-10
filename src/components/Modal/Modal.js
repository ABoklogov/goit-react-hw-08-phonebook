import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const ModalContact = ({ children }) => {
  return createPortal(<div>{children}</div>, modalRoot);
};

export default ModalContact;
