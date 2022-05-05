import React from 'react';
import ProjectsDropdown from "./ProjectsDropdown";
import GatewaysDropdown from "./GatewaysDropdown";
import {getDates} from "../../utils/getDates";
import DateFilterButton from "./DateFilterButton";
import GenerateReportButton from "./GenerateReportButton";

const START_DAY = '2021-01-01'; //initial starting date
const STOP_DAY = '2021-02-28'; //ending date


const FilterButtonsList = () => {

    const datesList = getDates(START_DAY, STOP_DAY);
    return (
        <div className='filterButtonList'>

            <ProjectsDropdown/>
            <GatewaysDropdown label='Gateway'/>
            <DateFilterButton label='From' data={datesList}/>
            <DateFilterButton label='To' data={datesList}/>
            <GenerateReportButton label='Generate Report'/>

        </div>
    );
};

export default FilterButtonsList;