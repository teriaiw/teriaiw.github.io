import { terminalContext } from "../pages/home";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Socials() {
    const {setTerminalMessage} = useContext(terminalContext);

    const linkedInMessage = "connect @teri-aiw";
    const gitHubMessage = "add @teriaiw";
    const emailMessage ="mail teri_ajm@hotmail.com";

    return (
        <div style={{display: 'flex', margin: '0 10px'}}>
            <button class="circle-link" onClick={() => setTerminalMessage(linkedInMessage)}>
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
            </button>

            <button class="circle-link" onClick={() => setTerminalMessage(gitHubMessage)}>
                <FontAwesomeIcon icon="fa-brands fa-github" />
            </button>

            <button class="circle-link" onClick={() => setTerminalMessage(emailMessage)}>
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
            </button>
        </div>
    )
};

export default Socials;