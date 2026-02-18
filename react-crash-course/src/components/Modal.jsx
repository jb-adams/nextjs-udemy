import classes from './Modal.module.css';

function Modal(props) {
  return (
    <>
      <div
        className={classes.backdrop}
        onClick={() => props.setModalIsVisible(false)}
      />
      <dialog open={true} className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;