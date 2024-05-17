import styles from './Skills.module.css'
import styled from 'styled-components'
import { menuContext } from '../App';
import { avatarContext } from '../App';
import { useContext, useState } from "react";

import Default from './AvatarImages/Default.png'
import Graduate from './AvatarImages/Graduate.png'
import Worker from './AvatarImages/Worker.png'
import PetOwner from './AvatarImages/PetOwner.png'
import Baker from './AvatarImages/Baker.png'
import Crystal from './AvatarImages/Crystal.png'

import Graduate1 from './AvatarImages/Graduate1.png'
import Graduate2 from './AvatarImages/Graduate2.png'
import Graduate3 from './AvatarImages/Graduate3.png'

import Worker1 from './AvatarImages/Worker1.png'
import Worker2 from './AvatarImages/Worker2.png'
import Worker3 from './AvatarImages/Worker3.png'

import Pet1 from './AvatarImages/Pet1.png'
import Pet2 from './AvatarImages/Pet2.png'
import Pet3 from './AvatarImages/Pet3.png'

import Baker1 from './AvatarImages/Baker1.png'
import Baker2 from './AvatarImages/Baker2.png'
import Baker3 from './AvatarImages/Baker3.png'

import Crystal1 from './AvatarImages/Crystal1.png'
import Crystal2 from './AvatarImages/Crystal2.png'
import Crystal3 from './AvatarImages/Crystal3.png'

const StyledButton = styled.button`
  text-decoration: none;
  margin: 5px;
  outline: none;
  border: none;
  background: none;
  
  p {
    font-size: 28px;
    padding: 2px 6px;
    margin: 7px;
    border-radius: 10px;
    font-family: "Pixelify Sans";
    color: grey;      
    display: inline;
  }

  span {
    display: none;
  }

  &:hover p {
    margin: 0px;
    color: palevioletred;
    border-style: dashed;
  }

  &:focus p {
    margin: 0px;
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

    /**Set Character Text */
    const defaultText = 'Click on any of the skills below to check my stats'
    let [text, setText] = useState(defaultText);

    /**Set Information Text on Skill */
    let [skillText, setSkillText] = useState('');

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
                setText('Knowledge acquired. Needs some work to get it useful.');
            } else if (avatarState === Worker) {
                setText('I need my little helper to get through this.');
            } else if (avatarState === PetOwner) {
                setText('Good sit.');
            } else if (avatarState === Baker) {
                setText('As good as I can make simple cookies. They are quite delicious.');
            } else if (avatarState === Crystal) {
                setText('A rock. Not fantastic but still valuable.');
            } else {
                setText('');
            }
        } else if (strength === 'med') {
            if (avatarState === Graduate) {
                setText('Certified, but needs more work.');
            } else if (avatarState === Worker) {
                setText('I can figure it out fast along the way.');
            } else if (avatarState === PetOwner) {
                setText('The tricks get better.');
            } else if (avatarState === Baker) {
                setText('Cupcakes with frosting, comes with experience.');
            } else if (avatarState === Crystal) {
                setText('Shiny crystal. Pretty neat.');
            } else {
                setText('');
            }
        } else if (strength === 'high') {
            if (avatarState === Graduate) {
                setText('Pretty good at it. Can put it to good use.');
            } else if (avatarState === Worker) {
                setText('I can get to work on this ASAP.');
            } else if (avatarState === PetOwner) {
                setText('As good as a Retreiver retrieves.');
            } else if (avatarState === Baker) {
                setText('As advanced as making a 3-tier cake.');
            } else if (avatarState === Crystal) {
                setText('As precious as this gold nugget. Retains it\'s value.');
            } else {
                setText('');
            }
        }
    }

    function setVisualInfo(strength) {
        setAvatarVariation(strength);
        setTextVariation(strength);
        setBarState(strength);
    }

    function setDefault() {
        setAvatar(defaultAvatar);
        setText(defaultText);
        setSkillText('');
        setBarState('');
    }

    function setInfo(skill) {
        if (skill === 'HTML') {
            setSkillText('The basics, have just updated my knowledge in HTML5.');
            setVisualInfo('high');
        } else if (skill === 'CSS') {
            setSkillText('This site uses Styled Components and CSS sheets.');
            setVisualInfo('high');
        } else if (skill === 'JavaScript') {
            setSkillText('I used to teach this to kids. It is used in this site as well.');
            setVisualInfo('high');
        } else if (skill === 'Java') {
            setSkillText('Used in majority of school projects, but have not used it in a while.');
            setVisualInfo('med');
        } else if (skill === 'Python') {
            setSkillText('I used to teach this to kids, but have not used it on my own projects.');
            setVisualInfo('med');
        } else if (skill === 'React') {
            setSkillText('It\'s what this site was built on.');
            setVisualInfo('high');
        } else if (skill === 'Angular') {
            setSkillText('Learnt it for work but did not apply in any projects yet.');
            setVisualInfo('low');
        } else if (skill === 'SQL') {
            setSkillText('Used frequently in my last project.');
            setVisualInfo('med');
        } else if (skill === 'PostgreSQL') {
            setSkillText('Used in an old project, have not revisited it.');
            setVisualInfo('low');
        }
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
                                <p className={styles.text}>{text}</p>
                                <p className={styles.text}>{skillText}</p>
                            </div>
                            <div className={styles.barContainer}>
                                <p>Proficiency:</p>
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
                        <StyledButton onFocus={() => setInfo('HTML')} onBlur={() => setDefault()}>
                            <span>{'\u25B6'}</span><p>HTML</p>
                        </StyledButton>
                        <StyledButton onFocus={() => setInfo('CSS')} onBlur={() => setDefault()}>
                            <span>{'\u25B6'}</span><p>CSS</p>
                        </StyledButton>
                        <StyledButton onFocus={() => setInfo('JavaScript')} onBlur={() => setDefault()}>
                            <span>{'\u25B6'}</span><p>JavaScript</p>
                        </StyledButton>
                        <StyledButton onFocus={() => setInfo('Java')} onBlur={() => setDefault()}>
                            <span>{'\u25B6'}</span><p>Java</p>
                        </StyledButton>
                        <StyledButton onFocus={() => setInfo('Python')} onBlur={() => setDefault()}>
                            <span>{'\u25B6'}</span><p>Python</p>
                        </StyledButton>
                        <StyledButton onFocus={() => setInfo('React')} onBlur={() => setDefault()}>
                            <span>{'\u25B6'}</span><p>React</p>
                        </StyledButton>
                        <StyledButton onFocus={() => setInfo('Angular')} onBlur={() => setDefault()}>
                            <span>{'\u25B6'}</span><p>Angular</p>
                        </StyledButton>
                        <StyledButton onFocus={() => setInfo('SQL')} onBlur={() => setDefault()}>
                            <span>{'\u25B6'}</span><p>SQL</p>
                        </StyledButton>
                        <StyledButton onFocus={() => setInfo('PostgreSQL')} onBlur={() => setDefault()}>
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