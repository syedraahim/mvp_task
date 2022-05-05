import { createContext } from "react";
export const ContextApiData = createContext({
    filteredDate:{from:'01.01.2021', to: '31.12.2021' },
    setFilteredDate:() => {},
    selectedProjectOrGateway: {},
    setProject:() => {},
    setGateway:() => {},
    selectedProject : [],
    selectedGateway : [],
    allData: {},
    setAllData: () => {}
});