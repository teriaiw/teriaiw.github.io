import { terminalContext } from "../pages/Home";
import { useContext } from "react";
import React from "react";
import Typed from "typed.js";
import "./terminal.css";

function Terminal() {
    const {terminalMessage} = useContext(terminalContext);
    
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [terminalMessage],
            typeSpeed: 50,
            startDelay: 50
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
    }, [terminalMessage]);

    return (  
        <div class="terminal">
            <span className="terminal-message" ref={el} />
        </div>
    );
}

export default Terminal;