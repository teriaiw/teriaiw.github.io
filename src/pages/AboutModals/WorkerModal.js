import Modal from 'react-modal';
import styles from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Worker from '../AvatarImages/Worker.png'

//for Acessibility
Modal.setAppElement('body');

function WorkerModal({isOpen, onClose}) {
  const para1 = 'As a Frontend Developer, my interests lie heavily in UI/UX. I enjoy noticing the beautiful designs and smooth user experience on any app or webpage I visit.';
  const para2 = 'Having worked as a Tester for the last 2 years, I\'m confident in following Accessibility guidelines and fishing for bugs.';

  return (
    <Modal
      style={{
        overlay: {
          position: 'fixed',
          backgroundColor: 'rgba(255, 255, 255, 0.55)'
        },
        content: {
          position: 'absolute',
          top: '15%',
          left: '15%',
          right: '15%',
          bottom: '15%',
          border: '1px solid #ccc',
          background: 'pink',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '25px',
          outline: 'none',
          padding: '50px'
        }
      }}
      isOpen={isOpen}
      contentLabel="Example Modal"
      closeOnOverlayClick={true}
      onRequestClose={onClose} 
    >
      <button className={styles.modalCloseButton} onClick={onClose}>
        <FontAwesomeIcon icon="fa-solid fa-xmark" size="2xl" style={{color: "#ffffff",}} />
      </button>
      <div className={styles.modalContainer}>
        <img src={Worker} alt='Worker Avatar'/>
        <h1 className={styles.modalHeader}>Developer_Teri</h1>
        <div className={styles.modalContent}>
          <p className={styles.modalText}>{para1}</p>
          <p className={styles.modalText}>{para2}</p>
        </div>
      </div>
    </Modal>
    );
}

export default WorkerModal;

