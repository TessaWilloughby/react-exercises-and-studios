import data from './../data.json';
import { useState } from 'react';

export default function ProjectsButton() {
    const [index, setIndex] = useState(0);

    let projectsList = data.projects;
    let currentProject = projectsList[index];
    
    function handleClick() {
        if (index < data.projects.length-1) {
            setIndex(index + 1);
        } else {
        setIndex(0);
        }
    }   

    return (
        <div>
            <p>{currentProject}</p>
            <button onClick={handleClick}>Next</button>
        </div>
    )
}