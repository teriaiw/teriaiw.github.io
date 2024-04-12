import { menuContext } from '../App';
import { useContext } from "react";

function Projects() {

    const {setActivePage} = useContext(menuContext);
    setActivePage("projects");

    return (
        <p>Projects</p>
    );
}

export default Projects