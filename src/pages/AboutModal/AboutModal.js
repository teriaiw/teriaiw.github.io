import Modal from 'react-modal';
import styles from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MODAL_CONTENT } from './modalContent';

//for Acessibility
Modal.setAppElement('body');

function AboutModal({isOpen, onClose, avatar}) {
  const content = MODAL_CONTENT[avatar];

  return (
    <Modal
      overlayClassName={styles.modalOverlay}
      className={`${styles.modalContent} ${styles.modalContentScrollbar}`}
      isOpen={isOpen}
      contentLabel="Modal"
      closeOnOverlayClick={true}
      onRequestClose={onClose} 
    >
      <button className={styles.modalCloseButton} onClick={onClose}>
        <FontAwesomeIcon icon="fa-solid fa-xmark" size="2xl" style={{color: "#ffffff",}} />
      </button>
      <div className={styles.modalContainer}>
        <img src={content.avatar} alt='Avatar'/>
        <h1 className={styles.modalHeader}>{content.title}</h1>
        <div className={styles.modalBody}>
          <p className={styles.modalText}>{content.description}</p>
          <div className={styles.modalContentBlock}>
            {content.image && (
              <img className={styles.modalImg} src={content.image} alt='Avatar' />
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default AboutModal;

