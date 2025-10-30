import styles from '../styles/CartModal.module.css';

const Modal = ({ children, onCancel, onConfirm }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>¿Estás seguro?</p>
        <div className={styles.content}>
          {children}
        </div>
        <div className={styles.actions}>
          <button onClick={onCancel} className={styles.cancel}>Cancelar</button>
          <button onClick={onConfirm} className={styles.confirm}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;


