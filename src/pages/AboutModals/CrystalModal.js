import Modal from 'react-modal';
import styles from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Crystal from '../AvatarImages/Crystal.png'
import Crystals from './Images/Crystals.JPEG'

//for Acessibility
Modal.setAppElement('body');

function CrystalModal({isOpen, onClose}) {
  const para1 = 'One of my hobbies is collecting Crystals. I was really amazed at how nature could create such magical minerals. One of my favourite crystals are Labradorites! It\'s really cool how they can reflect so many colors.';
  const para2 = 'I have an Instagram page documenting my collection @krztera. I used to sell some but it\'s closed for now.'

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
        <img src={Crystal} alt='Crystal Avatar'/>
        <h1 className={styles.modalHeader}>CrystalCollector_Teri</h1>
        <div className={styles.modalContent}>
          <p className={styles.modalText}>{para1}</p>
          <p className={styles.modalText}>{para2}</p>
          <div className={styles.modalContentBlock}>
            <img className={styles.modalImg} src={Crystals} />
          </div>
        </div>
      </div>
    </Modal>
    );
}

export default CrystalModal;

