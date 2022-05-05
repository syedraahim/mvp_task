import React, { useState, useContext } from 'react';
import { ContextApiData } from "../../ContextApi/ContextApiData";
import './index.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
const GatewaysDropdown = ({ label }) => {
    const { allData, setSelectedProjectOrGateway, setGateway } = useContext(ContextApiData);
    const { gateways } = allData;
    const [selectedGateways, setSelectedGateways] = useState([]);

    const selectGateway = (id) => {
        let selectedGateway = gateways.filter(item => item.id === id)[0];
        setSelectedProjectOrGateway([selectedGateway]);
        setGateway([selectedGateway])
        setSelectedGateways(selectedGateway);
    }

    const selectAllGateways = () => {
        setSelectedProjectOrGateway(gateways);
        setGateway(gateways);
        setSelectedGateways(gateways);

    }

    if (!gateways.length) {
        return 'Loading....';
    }
    return (
        <div className="dropdown">
            <DropdownButton as={ButtonGroup} title={selectedGateways.name ? selectedGateways.name : selectedGateways.length > 1 ? "All Gateways" : 'Select Gateway'} id="bg-vertical-dropdown-1" className='filterButton'>
                <Dropdown.Item onClick={selectAllGateways} className='filterButton' >All Gateways</Dropdown.Item>

                {gateways.map(item => (
                    <div key={item.id}>
                        <Dropdown.Item onClick={() => selectGateway(item.id)} eventKey={item.id}>{item.name}</Dropdown.Item>
                    </div>
                ))}
            </DropdownButton>
        </div>
    );
};

export default GatewaysDropdown;