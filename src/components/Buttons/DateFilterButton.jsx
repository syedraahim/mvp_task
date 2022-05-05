import React, { useContext, useState } from 'react';
import { ContextApiData } from "../../ContextApi/ContextApiData";
import './index.css';
import { Form } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { getReport } from "../../helper/api";


const DateFilterButton = ({ label, data }) => {


    const { setFilteredDate, filteredDate, setAllData, allData } = useContext(ContextApiData);
    const [selectedDate, setSelectedDate] = useState(null);

    const fetchReportData = async (date) => {
        const newReports = await getReport(date);
        return await newReports.json();
    }


    const handleSelectDate = async (day) => {
        setSelectedDate(day)
        let date;
        if (label === 'From') {
            date = { ...filteredDate, from: day };
            setFilteredDate(date);
        } else {
            date = { ...filteredDate, to: day };
            setFilteredDate(date)
        }
        try {
            const newReports = await fetchReportData(date);
            setAllData({ ...allData, reports: newReports.data });
        } catch (err) {
            console.log("err", err);
        }
    }

    if (!data.length) {
        return 'Loading....';
    }

    return (
        <div className="dropdown">
            <DropdownButton as={ButtonGroup} title={label === 'From' ? <p>From Date <i class="fa-solid fa fa-calendar-o"></i></p> : <p>To Date <i class="fa-solid fa fa-calendar-o"></i></p>} id="bg-vertical-dropdown-1" className='filterButton'>
                <Form.Control
                    type="date"
                    name="dob"
                    placeholder="Select Date"
                    value={selectedDate}
                    onChange={(e) => handleSelectDate((e.target.value))}
                />
            </DropdownButton>
        </div>
    );
};

export default DateFilterButton;