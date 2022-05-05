import React, {useContext} from 'react';
import './index.css';
import logoIcon from '../../assets/images/logoIcon.svg'
import logoLinesIcon from '../../assets/images/logoLinesIcon.svg'
import {ContextApiData} from "../../ContextApi/ContextApiData";


const Header = () => {
    const {allData} = useContext(ContextApiData);
    const {users} = allData;

    return (
        <div className="header">
            <img alt='logo' className="header__logoIcon" src={logoIcon}/>
            <img alt='logo' className="header__logoIconLines" src={logoLinesIcon}/>
            <div className="header__loginContainer">
                <div className="userIcon"/>
                {users && users.length && (
                    <p className='username'>{users[0].firstName + ' ' + users[0].lastName}</p>)}
            </div>
        </div>
    );
};

export default Header;