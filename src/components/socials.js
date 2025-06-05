import { terminalContext } from "../pages/Home";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Socials() {
    const {setTerminalMessage} = useContext(terminalContext);

    const linkedInMessage = 'connect <a href="https://www.linkedin.com/in/teri-aiw" target="_blank">@teri-aiw</a>';
    const gitHubMessage = 'add <a href="https://github.com/teriaiw" target="_blank">@teriaiw</a>';
    const emailMessage = 'mail <a href="mailto:teri_ajm@hotmail.com">teri_ajm@hotmail.com</a>';

    return (
        <div style={{display: 'flex', margin: '0 10px'}}>
            <button class="circle-link" onClick={() => setTerminalMessage(linkedInMessage)}>
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" style={{color: 'grey'}} />
            </button>

            <button class="circle-link" onClick={() => setTerminalMessage(gitHubMessage)}>
                <FontAwesomeIcon icon="fa-brands fa-github" style={{color: 'grey'}} />
            </button>

            <button class="circle-link" onClick={() => setTerminalMessage(emailMessage)}>
                <FontAwesomeIcon icon="fa-solid fa-envelope" style={{color: 'grey'}} />
            </button>
        </div>
    )
};

export default Socials;