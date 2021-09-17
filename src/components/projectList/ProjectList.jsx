import React from 'react';
import "./ProjectList.scss";

/* on click make list item id active and remove active class from another*/
export default function ProjectList({title, active, setSelected, id}) {
    return (
        <li className={active ? "projectList active" : "projectList"}
        onClick={() => setSelected(id)}>
            {title}
        </li>
    );
}

