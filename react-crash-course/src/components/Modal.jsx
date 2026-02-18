import {useNavigate} from 'react-router-dom';
import classes from './Modal.module.css';

function Modal(props) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={classes.backdrop}
        onClick={() => navigate('..')}
      />
      <dialog open={true} className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;