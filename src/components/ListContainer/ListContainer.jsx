import React, { useContext } from 'react';
import './index.css';
import List from "../DataList/List";
import { ContextApiData } from "../../ContextApi/ContextApiData";


const ListContainer = () => {
    const { selectedProjectOrGateway , selectedProject, selectedGateway} = useContext(ContextApiData);
    
    return (
        <div className='projectsList'>
            <p><b>{(selectedProject && selectedProject.length == 1) ? selectedProject[0].name : 'All Projects'}
              <span> | </span> {(selectedGateway && selectedGateway.length == 1 ) ? selectedGateway[0].name : 'All Gateways'}</b></p>
            <List/>
        </div>
    );
};

export default ListContainer;