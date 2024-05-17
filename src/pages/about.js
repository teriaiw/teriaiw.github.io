import styles from './About.module.css';
import { useState } from 'react';
import { menuContext } from '../App';
import { avatarContext } from '../App';
import { useContext } from "react";
import Graduate from './AvatarImages/Graduate.png'
import Worker from './AvatarImages/Worker.png'
import PetOwner from './AvatarImages/PetOwner.png'
import Baker from './AvatarImages/Baker.png'
import Crystal from './AvatarImages/Crystal.png'

import GraduateModal from './AboutModals/GraduateModal';
import WorkerModal from './AboutModals/WorkerModal';
import PetOwnerModal from './AboutModals/PetOwnerModal';
import BakerModal from './AboutModals/BakerModal';
import CrystalModal from './AboutModals/CrystalModal';

function About() {

    const {setActivePage} = useContext(menuContext);
    setActivePage("about");

    const {setAvatarState} = useContext(avatarContext);
    let[selectedAvatar, setSelectedAvatar] = useState('');

    let [graduateModalIsOpen, setGraduateIsOpen] = useState(false);
    let [workerModalIsOpen, setWorkerIsOpen] = useState(false);
    let [petModalIsOpen, setPetIsOpen] = useState(false);
    let [bakerModalIsOpen, setBakerIsOpen] = useState(false);
    let [crystalModalIsOpen, setCrystalIsOpen] = useState(false);

    function openModal(avatar) {
        if (avatar === Graduate) {
            setGraduateIsOpen(true);
        } else if (avatar === Worker) {
            setWorkerIsOpen(true);
        } else if (avatar === PetOwner) {
            setPetIsOpen(true);
        } else if (avatar === Baker) {
            setBakerIsOpen(true);
        } else if (avatar === Crystal) {
            setCrystalIsOpen(true);
        }   
    }

    function setAndOpen(avatar) {
        setAvatarState(avatar);
        setSelectedAvatar(avatar);
        openModal(avatar);
    }

    return (
        <div className={styles.Page}>
            <div className={styles.gridContainer}>
                <div className={styles.item1} />

                <div className={styles.item2}>
                    <h1>Select a Character</h1>
                    <div className={styles.wrapper}>
                        <div className={selectedAvatar === Graduate ? styles.avatarContainerSelected : styles.avatarContainer} 
                            onClick={() => setAndOpen(Graduate)}>
                            <img src={Graduate} alt='Graduate Avatar'/>
                        </div>

                        <div className={selectedAvatar === Worker ? styles.avatarContainerSelected : styles.avatarContainer} 
                            onClick={() => setAndOpen(Worker)}>
                            <img src={Worker} alt='Worker Avatar'/>
                        </div>

                        <div className={selectedAvatar === PetOwner ? styles.avatarContainerSelected : styles.avatarContainer} 
                            onClick={() => setAndOpen(PetOwner)}>
                            <img src={PetOwner} alt='Pet Owner Avatar'/>
                        </div>

                        <div className={selectedAvatar === Baker ? styles.avatarContainerSelected : styles.avatarContainer} 
                            onClick={() => setAndOpen(Baker)}>
                            <img src={Baker} alt='Baker Avatar'/>
                        </div>

                        <div className={selectedAvatar === Crystal ? styles.avatarContainerSelected : styles.avatarContainer} 
                            onClick={() => setAndOpen(Crystal)}>
                            <img src={Crystal} alt='Crystal Avatar'/>
                        </div>
                    </div>
                    
                </div>

                <div className={styles.item3} />
            </div>

            {/**Individual Modals */}
            <div className={styles.modal}>
                <GraduateModal isOpen={graduateModalIsOpen} onClose={() => setGraduateIsOpen(false)} />
            </div>
            <div className={styles.modal}>
                <WorkerModal isOpen={workerModalIsOpen} onClose={() => setWorkerIsOpen(false)} />
            </div>
            <div className={styles.modal}>
                <PetOwnerModal isOpen={petModalIsOpen} onClose={() => setPetIsOpen(false)} />
            </div>
            <div className={styles.modal}>
                <BakerModal isOpen={bakerModalIsOpen} onClose={() => setBakerIsOpen(false)} />
            </div>
            <div className={styles.modal}>
                <CrystalModal isOpen={crystalModalIsOpen} onClose={() => setCrystalIsOpen(false)} />
            </div>
        </div>
    );
}

export default About;