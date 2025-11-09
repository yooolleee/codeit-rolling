import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

function Modal({
  isOpen,
  onClose,
  profileImg,
  name,
  badge,
  createAt,
  message,
}) {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.userInfo}>
            <div className={styles.profileImg}>{profileImg}</div>
            <div>
              <div className={styles.name}>
                <span className={styles.label}>From.</span>
                <span className={styles.username}>{name}</span>
              </div>
              <div className={styles.badge}>{badge}</div>
            </div>
          </div>
          <div className={styles.date}>{createAt}</div>
        </div>
        <div className={styles.messageBox}>
          <div className={styles.scrollArea}>
            <p className={styles.message}>{message}</p>
          </div>
        </div>
        <div className={styles.footer}>
          <button onClick={onClose} className={styles.button}>
            확인
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default Modal;
