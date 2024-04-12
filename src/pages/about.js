import styles from './about.module.css';
import { useState } from 'react';
import { menuContext } from '../App';
import { useContext } from "react";

import NerdModal from './AboutModals/NerdModal';

function About() {

    let [modalIsOpen, setIsOpen] = useState(false);
    const {setActivePage} = useContext(menuContext);
    setActivePage("about");

    function openModal() {
        setIsOpen(true);
      }

    return (
        <div className={styles.Page}>
            <div className={styles.gridContainer}>
                <div className={styles.item1} />

                <div className={styles.item2}>
                    <h1>Select a Character</h1>
                    <div className={styles.dummyWrapper}>
                        <button className={styles.dummyContainer} onClick={openModal}>Test</button>
                        <div className={styles.dummyContainer}>Test</div>
                        <div className={styles.dummyContainer}>Test</div>
                        <div className={styles.dummyContainer}>Test</div>
                    </div>
                    
                </div>

                <div className={styles.item3} />
            </div>
            <div className={styles.modal}>
                <NerdModal isOpen={modalIsOpen} onClose={() => setIsOpen(false)} />
            </div>
        </div>
    );
}

export default About;