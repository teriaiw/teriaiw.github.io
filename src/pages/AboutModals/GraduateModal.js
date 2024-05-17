import Modal from 'react-modal';
import styles from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Graduate from '../AvatarImages/Graduate.png';
import NUS from './Images/NUS.JPG';
import NYP from './Images/NYP.JPG';

//for Acessibility
Modal.setAppElement('body');

function GraduateModal({isOpen, onClose}) {
  const para1 = 'In 2022, I graduated from National University of Singapore with a Bachelor\'s degree in Computer Science, and Minor in Interactive Media Developement.';
  const para2 = 'In 2018, I graduated from Nanyang Polytechnic with a Diploma in Hospitality & Tourism and managed to get 3rd in the cohort.';
  
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
        <img src={Graduate} alt='Graduate Avatar'/>
        <h1 className={styles.modalHeader}>Graduate_Teri</h1>
        <div className={styles.modalContent}>
            <p className={styles.modalText}>{para1}</p>
            <p className={styles.modalText}>{para2}</p>
            <div className={styles.modalContentBlock}>
              <img className={styles.modalImg} src={NUS} />
              <img className={styles.modalImg} src={NYP} />
            </div>
            
        </div>
      </div>
    </Modal>
    );
}

export default GraduateModal;

