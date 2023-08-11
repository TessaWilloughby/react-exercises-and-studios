import data from './../data.json';
import { useState } from 'react';

export default function MyProjects() {
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
            <p><b>Date:</b> {currentProject.date}</p>
            <p><b>Least favorite exercise:</b> {currentProject['least favorite exercise']}</p>
            <p><b>Most favorite exercise:</b> {currentProject['most favorite exercise']}</p>
            <p><b>Was it a speciality exercise?</b> {currentProject['speciality workout'] ? "Yes" : "No"}</p>
            <button onClick={handleClick}>Next</button>
        </div>
    )
}