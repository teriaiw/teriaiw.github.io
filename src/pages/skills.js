import styles from './Skills.module.css'
import { menuContext } from '../App';
import { avatarContext } from '../App';
import { useContext, useState } from "react";
import { avatars } from '../config/avatarConfig';
import { textVariations } from './skillsContent';
import { skillContent } from './skillsContent';

function Skills() {

    const {setActivePage} = useContext(menuContext);
    setActivePage("skills");

    /**To know which Character was selected from About page */
    const {avatarState} = useContext(avatarContext);

    /**Set Character */
    const avatarObj = avatars.find((a) => a.id === avatarState) || avatars.find(a => a.id === 'Default');
    const defaultAvatar = avatarObj?.image;
    let [avatar, setAvatar] = useState(defaultAvatar);

    function setAvatarVariation(strength) {
        const variation = avatarObj?.variations?.[strength];
        if (variation) {
            setAvatar(variation);
        }
    }

    /**Set Character Text */
    const defaultText = textVariations.Default;
    let [text, setText] = useState(defaultText);

    function setTextVariation(strength) {
        const variation = textVariations?.[avatarState]?.[strength] || defaultText;
        setText(variation);   
    }

    /**Set Information Text on Skill */
    let [skillText, setSkillText] = useState('');

    function setInfo(skill) {
        const content = skillContent[skill];
        if (!content) return;
      
        setSkillText(content.description);
        setVisualInfo(content.strength);
    }

    function setVisualInfo(strength) {
        setAvatarVariation(strength);
        setTextVariation(strength);
        setBarState(strength);
    }

    /**Set Bar Strength */
    let [barState, setBarState] = useState('');

    function setDefault() {
        setAvatar(defaultAvatar);
        setText(defaultText);
        setSkillText('');
        setBarState('');
    }

    const skills = Object.keys(skillContent);

    const SkillButton = ({ skill, onFocus, onBlur }) => (
        <button className={styles.skillButton} onFocus={() => onFocus(skill)} onBlur={onBlur}>
            <span>{'\u25B6'}</span><p>{skill}</p>
        </button>
    );

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
                        {skills.map(skill => (
                            <SkillButton key={skill} skill={skill} onFocus={setInfo} onBlur={setDefault} />
                        ))}
                    </div>
                </div>

                <div className={styles.item3} />
            </div>
        </div>
    );
}

export default Skills