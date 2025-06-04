import styles from './About.module.css';
import { useState } from 'react';
import { menuContext } from '../App';
import { avatarContext } from '../App';
import { useContext } from "react";
import AboutModal from './AboutModal/AboutModal';
import { avatars } from '../config/avatarConfig';

function About() {

    const {setActivePage} = useContext(menuContext);
    setActivePage("about");

    const {setAvatarState} = useContext(avatarContext);
    let[selectedAvatar, setSelectedAvatar] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal(avatar) {
        setSelectedAvatar(avatar);
        setIsModalOpen(true);
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
                    {avatars.map(({ id, image }) => (
                    <div
                        key={id}
                        className={selectedAvatar === id ? styles.avatarContainerSelected : styles.avatarContainer}
                        onClick={() => setAndOpen(id)}
                    >
                        <img src={image} alt={`${id} Avatar`} />
                    </div>
                    ))}
                    </div>
                </div>

                <div className={styles.item3} />
            </div>

            <div className={styles.modal}>
            {selectedAvatar && (
                <AboutModal 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)} 
                    avatar={selectedAvatar} 
                />
            )}
            </div>
        </div>
    );
}

export default About;