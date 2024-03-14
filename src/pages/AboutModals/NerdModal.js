import Modal from 'react-modal';
import styles from '../about.module.css';

//for Acessibility
Modal.setAppElement('body');

function NerdModal({isOpen, onClose}) {

  return (
    <Modal
      style={{
        overlay: {
          position: 'fixed',
          top: '10%',
          left: '10%',
          right: '10%',
          bottom: '10%',
          backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
          position: 'absolute',
          top: '40px',
          left: '40px',
          right: '40px',
          bottom: '40px',
          border: '1px solid #ccc',
          background: 'pink',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px'
        }
      }}
      isOpen={isOpen}
      contentLabel="Example Modal"
    >
      <button className={styles.modalCloseButton} onClick={onClose}>close</button>
      <h2 className={styles.modalHeader}>Hello</h2>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </Modal>
    );
}

export default NerdModal;

