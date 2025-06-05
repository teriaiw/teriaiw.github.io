import styles from './About.module.css';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { menuContext } from '../App';
import { avatarContext } from '../App';
import { useContext } from "react";
import AboutModal from './AboutModal/AboutModal';
import { avatars } from '../config/avatarConfig';

function About() {

    const {setActivePage} = useContext(menuContext);
    setActivePage("about");
    const navigate = useNavigate();

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

    const scrollRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    const checkScrollPosition = () => {
        const el = scrollRef.current;
        if (!el) return;
        
        const tolerance = 5;
        setShowLeftArrow(el.scrollLeft > tolerance);
        setShowRightArrow(el.scrollLeft + el.clientWidth < el.scrollWidth - tolerance);
    };
      

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
      
        checkScrollPosition(); // Initial check
        el.addEventListener('scroll', checkScrollPosition);
        window.addEventListener('resize', checkScrollPosition); // Recalculate on resize
      
        return () => {
          el.removeEventListener('scroll', checkScrollPosition);
          window.removeEventListener('resize', checkScrollPosition);
        };
    }, []);

    const handleScroll = (offset) => {
        const el = scrollRef.current;
        if (el) {
          el.scrollTo({ left: el.scrollLeft + offset, behavior: 'smooth' });
        }
      };

    return (
        <div className={styles.Page}>
            <div className={styles.gridContainer}>
                <div className={styles.item1} />

                <div className={styles.item2}>
                    <h1>Select a Character</h1>

                    <div className={styles.scrollWrapper}>
                        {!isModalOpen && showLeftArrow && (
                            <button className={styles.scrollButtonLeft} onClick={() => handleScroll(-200)}>
                                &#9664;
                            </button>
                        )}

                        <div className={styles.wrapper} ref={scrollRef}>
                            {avatars.filter(({ id }) => id !== 'Default').map(({ id, image }) => (
                                <div
                                    key={id}
                                    className={selectedAvatar === id ? styles.avatarContainerSelected : styles.avatarContainer}
                                    onClick={() => setAndOpen(id)}
                                >
                                    <img src={image} alt={`${id} Avatar`} />
                                </div>
                            ))}
                        </div>

                        {!isModalOpen && showRightArrow && (
                            <button className={styles.scrollButtonRight} onClick={() => handleScroll(200)}>
                                &#9654;
                            </button>
                        )}
                    </div>

                    {selectedAvatar &&
                        <button className={styles.continueButton} onClick={() => navigate("/my-skills")}>
                            Confirm
                        </button>
                    }
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