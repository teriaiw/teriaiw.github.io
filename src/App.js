import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import WebFont from 'webfontloader';

import './App.css';

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/Skills';
import Projects from './pages/projects';
import PageMenu from './pages/PageMenu';

import { createContext } from 'react';
import { useState } from 'react';

export const menuContext = createContext(null);

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Rammetto One', 'Silkscreen', 'Pixelify Sans']
      }
    });
   }, []);

  let [activePage, setActivePage] = useState("");

  return (
    <menuContext.Provider value={{activePage, setActivePage}}>
      <BrowserRouter>
        <Routes>
          <Route
            element={(
              <>
                <PageMenu />
                <Outlet />
              </>
            )}>
              <Route path="/my-life" element={<About />} />
              <Route path="/my-skills" element={<Skills />} />
              <Route path="/my-projects" element={<Projects />} />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </menuContext.Provider>
  );
}

export default App;
library.add(fab, fas)
