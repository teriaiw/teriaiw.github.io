import { menuContext } from '../App';
import { useContext } from "react";

function Skills() {

    const {setActivePage} = useContext(menuContext);
    setActivePage("skills");

    return (
        <p>Skills</p>
    );
}

export default Skills