import Modal from 'react-modal';
import styles from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Baker from '../AvatarImages/Baker.png'
import Cookies from './Images/Cookies.JPG'

//for Acessibility
Modal.setAppElement('body');

function BakerModal({isOpen, onClose}) {
  const para1 = 'I enjoy baking. I bake cookies the most, but I can also make cupcakes, PUPcakes, and cakes!';

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
        <img src={Baker} alt='Baker Avatar'/>
        <h1 className={styles.modalHeader}>Baker_Teri</h1>
        <div className={styles.modalContent}>
          <p className={styles.modalText}>{para1}</p>
          <div className={styles.modalContentBlock}>
            <img className={styles.modalImg} src={Cookies} />
          </div>
        </div>
      </div>
    </Modal>
    );
}

export default BakerModal;

