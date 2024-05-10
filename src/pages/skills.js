import styles from './Skills.module.css'
import styled from 'styled-components'
import { menuContext } from '../App';
import { useContext } from "react";

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

    return (
        <div className={styles.Page}>
            <div className={styles.gridContainer}>
                <div className={styles.item1} />

                <div className={styles.item2}>
                    <div className={styles.dummyContainer}>Test</div>
                    <h1>Check My Skills</h1>
                    <div className={styles.dummyWrapper}>
                        <StyledButton>
                            <span>{'\u25B6'}</span><p>HTML</p>
                        </StyledButton>
                        <StyledButton>
                            <span>{'\u25B6'}</span><p>CSS</p>
                        </StyledButton>
                        <StyledButton>
                            <span>{'\u25B6'}</span><p>JavaScript</p>
                        </StyledButton>
                        <StyledButton>
                            <span>{'\u25B6'}</span><p>Java</p>
                        </StyledButton>
                        <StyledButton>
                            <span>{'\u25B6'}</span><p>Python</p>
                        </StyledButton>
                        <StyledButton>
                            <span>{'\u25B6'}</span><p>React</p>
                        </StyledButton>
                        <StyledButton>
                            <span>{'\u25B6'}</span><p>Angular</p>
                        </StyledButton>
                        <StyledButton>
                            <span>{'\u25B6'}</span><p>SQL</p>
                        </StyledButton>
                        <StyledButton>
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