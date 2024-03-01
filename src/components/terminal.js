import { terminalContext } from "../pages/home";
import { useContext } from "react";
import "./terminal.css";

function Terminal() {
    const {terminalMessage} = useContext(terminalContext);

    return (  
        <div class="terminal">
            <p className="terminal-message">{terminalMessage}</p>
        </div>
    );
}

export default Terminal;