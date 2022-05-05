import React, { useContext, useState } from 'react';
import './index.css';
import { ContextApiData } from "../../ContextApi/ContextApiData";
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
const ProjectsDropdown = () => {
    const { allData, setSelectedProjectOrGateway, selectedProjectOrGateway, setProject } = useContext(ContextApiData);
    const { projects } = allData;
    const [selectedProjects, setSelectedProjects] = useState([]);

    const selectProject = (id) => {
        let selectedProject = projects.filter(item => item.id === id)[0];
        setSelectedProjectOrGateway([selectedProject]);
        setSelectedProjects(selectedProject)
        setProject([selectedProject]);

    }

    const selectAllProjects = () => {
        setSelectedProjectOrGateway(projects);
        setSelectedProjects(projects)
        setProject(projects);
    }

    if (!projects.length) {
        return 'Loading....';
    }

    return (
        <div className="dropdown">
            <DropdownButton as={ButtonGroup} title={selectedProjects.name ? selectedProjects.name : selectedProjects.length > 1 ? "All Projects" : 'Select Project'} id="bg-vertical-dropdown-1"  className='filterButton'>
                <Dropdown.Item onClick={selectAllProjects}  className='filterButton' >All projects</Dropdown.Item>

                {projects.map(item => (
                    <div key={item.id}>
                        <Dropdown.Item onClick={() => selectProject(item.id)} eventKey={item.id}>{item.name}</Dropdown.Item>
                    </div>
                ))}
            </DropdownButton>
        </div>
    );
};

export default ProjectsDropdown;

