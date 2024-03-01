import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import WebFont from 'webfontloader';

import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';
import Projects from './pages/projects';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Rammetto One', 'Silkscreen', 'Pixelify Sans']
      }
    });
   }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/my-life" element={<About />} />
          <Route path="/my-skills" element={<Skills />} />
          <Route path="/my-projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
library.add(fab, fas)
