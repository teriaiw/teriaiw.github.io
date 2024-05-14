import styles from './Skills.module.css'
import styled from 'styled-components'
import { menuContext } from '../App';
import { avatarContext } from '../App';
import { useContext, useState } from "react";

import Default from './skillAvatars/Default.png'
import Graduate from './skillAvatars/Graduate.png'
import Worker from './skillAvatars/Worker.png'
import PetOwner from './skillAvatars/PetOwner.png'
import Baker from './skillAvatars/Baker.png'
import Crystal from './skillAvatars/Crystal.png'

import Graduate1 from './skillAvatars/Graduate1.png'
import Graduate2 from './skillAvatars/Graduate2.png'
import Graduate3 from './skillAvatars/Graduate3.png'

import Worker1 from './skillAvatars/Worker1.png'
import Worker2 from './skillAvatars/Worker2.png'
import Worker3 from './skillAvatars/Worker3.png'

import Pet1 from './skillAvatars/Pet1.png'
import Pet2 from './skillAvatars/Pet2.png'
import Pet3 from './skillAvatars/Pet3.png'

import Baker1 from './skillAvatars/Baker1.png'
import Baker2 from './skillAvatars/Baker2.png'
import Baker3 from './skillAvatars/Baker3.png'

import Crystal1 from './skillAvatars/Crystal1.png'
import Crystal2 from './skillAvatars/Crystal2.png'
import Crystal3 from './skillAvatars/Crystal3.png'

const StyledButton = styled.button`
  text-decoration: none;
  margin: 5px;
  outline: none;
  border: none;
  background: none;
  
  p {
    font-size: 28px;
    padding: 2px 6px;
    border-radius: 10px;
    font-family: "Pixelify Sans";
    color: grey;      
    display: inline;
  }

  span {
    display: none;
  }

  &:hover p {
    color: palevioletred;
    border-style: dashed;
  }

  &:focus p {
    color: palevioletred;
    border-style: ridge;
    border-color: palevioletred;
    background: white;
  }

  &:focus span {
    color: palevioletred;
    display: inline;
  }
  
  &:hover span {
    color: palevioletred;
    display: inline;
  }
`;

function Skills() {

    const {setActivePage} = useContext(menuContext);
    setActivePage("skills");

    /**To know which Character was selected from About page */
    const {avatarState} = useContext(avatarContext);

    /**Set Character */
    const defaultAvatar = avatarState ? avatarState : Default;
    let [avatar, setAvatar] = useState(defaultAvatar);

    /**Set Text */
    const defaultText = 'Click on any of the skills below to check my stats'
    let [text, setText] = useState(defaultText);

    /**Set Bar Strength */
    let [barState, setBarState] = useState('');

    function setAvatarVariation(strength) {
        if (strength === 'low') {
            if (avatarState === Graduate) {
                setAvatar(Graduate1);
            } else if (avatarState === Worker) {
                setAvatar(Worker1);
            } else if (avatarState === PetOwner) {
                setAvatar(Pet1);
            } else if (avatarState === Baker) {
                setAvatar(Baker1);
            } else if (avatarState === Crystal) {
                setAvatar(Crystal1);
            }
        } else if (strength === 'med') {
            if (avatarState === Graduate) {
                setAvatar(Graduate2);
            } else if (avatarState === Worker) {
                setAvatar(Worker2);
            } else if (avatarState === PetOwner) {
                setAvatar(Pet2);
            } else if (avatarState === Baker) {
                setAvatar(Baker2);
            } else if (avatarState === Crystal) {
                setAvatar(Crystal2);
            }
        } else if (strength === 'high') {
            if (avatarState === Graduate) {
                setAvatar(Graduate3);
            } else if (avatarState === Worker) {
                setAvatar(Worker3);
            } else if (avatarState === PetOwner) {
                setAvatar(Pet3);
            } else if (avatarState === Baker) {
                setAvatar(Baker3);
            } else if (avatarState === Crystal) {
                setAvatar(Crystal3);
            }
        }
    }

    function setTextVariation(strength) {
        if (strength === 'low') {
            if (avatarState === Graduate) {
                setText('I passed and obtained the scroll. But I shall work on it.');
            } else if (avatarState === Worker) {
                setText('I need my little helper to get through this.');
            } else if (avatarState === PetOwner) {
                setText('As good as my Aura can sit.');
            } else if (avatarState === Baker) {
                setText('As good as I can make simple cookies. They are quite delicious.');
            } else if (avatarState === Crystal) {
                setText('As precious as this rock. Not fantastic but still valuable.');
            } else {
                setText('low');
            }
        } else if (strength === 'med') {
            if (avatarState === Graduate) {
                setText('Got the certificate. But not a master at it yet.');
            } else if (avatarState === Worker) {
                setText('As good as me playing games. I can figure it out fast along the way.');
            } else if (avatarState === PetOwner) {
                setText('As good as an intermediate dog trick.');
            } else if (avatarState === Baker) {
                setText('I can make cupcakes with frosting. Comes with experience.');
            } else if (avatarState === Crystal) {
                setText('As precious as this shiny crystal. Pretty neat.');
            } else {
                setText('med');
            }
        } else if (strength === 'high') {
            if (avatarState === Graduate) {
                setText('Pretty smart at it to get a trophy.');
            } else if (avatarState === Worker) {
                setText('I can get to work asap on this.');
            } else if (avatarState === PetOwner) {
                setText('Fetching a frisbee is for the most agile dogs.');
            } else if (avatarState === Baker) {
                setText('3-tier cake is my specialty.');
            } else if (avatarState === Crystal) {
                setText('As precious as this gold nugget. Retains it\'s value.');
            } else {
                setText('high');
            }
        }
    }

    function setInfo(strength) {
        setAvatarVariation(strength);
        setTextVariation(strength);
        setBarState(strength);
    }

    function setDefault() {
        setAvatar(defaultAvatar);
        setText(defaultText);
        setBarState('');
    }

    return (
        <div className={styles.Page}>
            <div className={styles.gridContainer}>
                <div className={styles.item1} />

                <div className={styles.item2}>
                    <div className={styles.container}>
                        <div className={styles.avatarContainer}>
                            <img src={avatar} alt='avatar'/>
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.textContainer}>
                                <p>{text}</p>
                            </div>
                            <div className={styles.barContainer}>
                                <div className={styles.barOuter}>
                                    { barState === '' ? null : <div className={styles.barInner1} />}
                                    { barState === 'med' ? <div className={styles.barInner2} /> : barState === 'high' ? <div className={styles.barInner2} /> : null}
                                    { barState === 'high' ? <div className={styles.barInner3} /> : null}
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1>Check My Skills</h1>
                    <div className={styles.wrapper}>
                        <StyledButton onFocus={() => setInfo('high')} onBlur={() => setDefault()}>
                            <span>{'\u25B6'}</span><p>HTML</p>
                        </StyledButton>
                        <StyledButton onFocus={() => setInfo('high')} onBlur={() => setDefault()}>
                            <span>{'\u25B6'}</span><p>CSS</p>
                        </StyledButton>
                        <StyledButton onFocus={() => setInfo('high')} onBlur={() => setDefault()}>
                            <span>{'\u25B6'}</span><p>JavaScript</p>
                        </StyledButton>
                        <StyledButton onFocus={() => setInfo('med')} onBlur={() => setDefault()}>
                            <span>{'\u25B6'}</span><p>Java</p>
                        </StyledButton>
                        <StyledButton onFocus={() => setInfo('high')} onBlur={() => setDefault()}>
                            <span>{'\u25B6'}</span><p>Python</p>
                        </StyledButton>
                        <StyledButton onFocus={() => setInfo('high')} onBlur={() => setDefault()}>
                            <span>{'\u25B6'}</span><p>React</p>
                        </StyledButton>
                        <StyledButton onFocus={() => setInfo('low')} onBlur={() => setDefault()}>
                            <span>{'\u25B6'}</span><p>Angular</p>
                        </StyledButton>
                        <StyledButton onFocus={() => setInfo('med')} onBlur={() => setDefault()}>
                            <span>{'\u25B6'}</span><p>SQL</p>
                        </StyledButton>
                        <StyledButton onFocus={() => setInfo('med')} onBlur={() => setDefault()}>
                            <span>{'\u25B6'}</span><p>PostgreSQL</p>
                        </StyledButton>
                    </div>
                </div>

                <div className={styles.item3} />
            </div>
        </div>
    );
}

export default Skills