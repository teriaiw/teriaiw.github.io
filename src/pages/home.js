import { Outlet } from 'react-router-dom';
import Terminal from '../components/terminal';
import Menu from '../components/Menu';
import Socials from '../components/socials';
import { createContext } from 'react';
import { useState } from 'react';
import { menuContext } from '../App';
import { useContext } from "react";

import styles from './Home.module.css';

export const terminalContext = createContext(null);

function Home() {
  let [terminalMessage, setTerminalMessage] = useState("Teri's Site Loaded");
  const {setActivePage} = useContext(menuContext);
  setActivePage("home");

    return (
      <terminalContext.Provider value={{terminalMessage, setTerminalMessage}}>
        <div className="App">
          <div className={styles.gridContainer}>
            <div className={styles.item1} />
            
            {/**Intro */}
            <div className={styles.item2}>
              <h1>Hello World,</h1>
              <h2>I'm Teri</h2>
    
              <p>view my:</p>
              <Menu />
            </div>
    
            <div className={styles.item3} />
    
            {/**Interactive Terminal */}
            <div className={`${styles.item4} ${styles.content}`}>
              <div className={styles.cardContainer}>
                <p>cmd for me</p>
                <Socials />
              </div>
              <Terminal />
            </div>
    
            <div className={styles.item5} />
          </div>

          <Outlet />
        </div>
        </terminalContext.Provider>
      );
}

export default Home;