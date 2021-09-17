import React from 'react';
import "./ProjectList.scss";

export default function ProjectList({title, active, setSelected}) {
    return (
        <li className={active ? "projectList active" : "projectList"} >
            {title}
        </li>
    );
}

