import React from 'react';
import './index.css';
import MainHeading from "./MainHeading";
import ProjectsOrGatewaysListContainer from "../ListContainer/ListContainer";
import FilterButtonsList from "../Buttons/ButtonsList";
import Chart from "../chart/Doughnut";

const MainBoard = () => {

    return (
        <div className='mainBoard'>
            <div className='mainBoard__topSection'>
                <MainHeading />
                <FilterButtonsList/>
            </div>
            <div className='mainBoard__bottomSection'>
                <ProjectsOrGatewaysListContainer/>
                <Chart/>
            </div>

        </div>
    );
};

export default MainBoard;