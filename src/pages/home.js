import { Outlet } from 'react-router-dom';
import Terminal from '../components/terminal';
import Menu from '../menu';
import Socials from '../components/socials';
import { createContext } from 'react';
import { useState } from 'react';

export const terminalContext = createContext(null);

function Home() {
  let [terminalMessage, setTerminalMessage] = useState("Teri's Site Loaded");

    return (
      <terminalContext.Provider value={{terminalMessage, setTerminalMessage}}>
        <div className="App">
          <div className="grid-container">
            <div className="item1" />
            
            {/**Intro */}
            <div className="item2">
              <h1>Hello World,</h1>
              <h2>I'm Teri</h2>
    
              <p>view my:</p>
              <Menu />
            </div>
    
            <div className="item3" />
    
            {/**Interactive Terminal */}
            <div className="item4 content">
              <div class="card-container">
                <p>cmd for me</p>
                <Socials />
              </div>
              <Terminal />
            </div>
    
            <div className="item5" />
          </div>

          <Outlet />
        </div>
        </terminalContext.Provider>
      );
}

export default Home;