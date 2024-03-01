import { terminalContext } from "./home";
import { useContext } from "react";

function Test() {
    const {terminalMessage} = useContext(terminalContext);
    const {setTerminalMessage} = useContext(terminalContext);

    return (
        <div>
            <p>{terminalMessage}</p>
            <button onClick={() => {setTerminalMessage('hello button')}}>Button</button>
        </div>
    )
};

export default Test;