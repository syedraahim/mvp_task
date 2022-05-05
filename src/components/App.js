import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./header/Header";
import SideBar from "./sideBar/SideBar";
import {ContextApiData} from '../ContextApi/ContextApiData';
import {getGateways, getProjects, getReport, getUsers} from "../helper/api";
import MainBoard from "./mainBoard/MainBoard";

const App = () => {
    const [selectedProjectOrGateway, setSelectedProjectOrGateway] = useState();
    const [allData, setAllData] = useState();
    const [filteredDate, setFilteredDate] = useState();
    const [project, setProject] = useState([])
    const [gateway, setGateway] = useState([])

    useEffect(() => {
            try {
                Promise.all([getUsers(), getProjects(), getGateways(), getReport({})]).then(values => {
                    return Promise.all(values.map(r => r.json()));
                }).then(values => {
                        const updatedProjects = values[1].data.map(item => {
                            return {name: item.name, id: item.projectId, itemType: 'project'}
                        });
                        const updatedGateways = values[2].data.map(item => {
                            return {name: item.name, id: item.gatewayId, itemType: 'gateway'}
                        });

                        setSelectedProjectOrGateway(updatedProjects)
                        setAllData({
                            users: values[0].data,
                            projects: updatedProjects,
                            gateways: updatedGateways,
                            reports: values[3].data
                        })
                    }
                )

            } catch (err) {
                console.log('err');
            }
        }
        , [])

    if (!allData) {
        return 'Loading...'
    }
    return (
        <ContextApiData.Provider value={{
            allData: allData,
            setAllData: setAllData,
            setSelectedProjectOrGateway: setSelectedProjectOrGateway,
            selectedProjectOrGateway: selectedProjectOrGateway,
            setFilteredDate: setFilteredDate,
            filteredDate: filteredDate,
            setGateway : setGateway,
            setProject : setProject,
            selectedProject : project,
            selectedGateway : gateway
        }}>

            <div>
                <Header/>
                <main className='app__main'>
                    <SideBar/>
                    <MainBoard/>
                </main>
            </div>
        </ContextApiData.Provider>
    );

}

export default App;
