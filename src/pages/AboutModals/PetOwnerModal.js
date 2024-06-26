import Modal from 'react-modal';
import styles from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PetOwner from '../AvatarImages/PetOwner.png'
import Aura from './Images/Aura.HEIC'

//for Acessibility
Modal.setAppElement('body');

function PetOwnerModal({isOpen, onClose}) {
  const para1 ='I have an adorable Golden Retriever named Aura. I took her home when she was just 2 months old and she\'s almost 4 years old now. She\'s my biggest joy in life and I love her to bits.';

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
        <img src={PetOwner} alt='Pet Owner Avatar'/>
        <h1 className={styles.modalHeader}>PetOwner_Teri</h1>
        <div className={styles.modalContent}>
          <p className={styles.modalText}>{para1}</p>
          <div className={styles.modalContentBlock}>
            <img className={styles.modalImg} src={Aura} />
          </div>   
        </div>
      </div>
    </Modal>
    );
}

export default PetOwnerModal;

