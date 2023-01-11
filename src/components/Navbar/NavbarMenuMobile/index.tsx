import React, { useState, useEffect } from 'react';
import NavbarTextElement from '../NavbarTextElement';
import './style.css';

interface NavbarElement {
    name: string;
    path: string;
    icon: string;
}

interface PropsListElements {
    propListElements: NavbarElement[];
    propClicked: boolean;
}

const NavbarMenuMobile: React.FC<PropsListElements> = ({propListElements, propClicked}) => {
    const [clicked, setClicked] = useState<boolean>(propClicked);
    const [currentPath] = useState<string>(window.location.pathname);

    useEffect(() => {
        setClicked(propClicked)
    }, [propClicked]);

    return (
        <>
            <ul 
                id="menu-mobile" 
                className={clicked ? "#menu-mobile active" : "#menu-mobile"}>
                {propListElements.map(element => {
                    return (
                        <NavbarTextElement 
                            key={element.name + '1'}
                            name={element.name}
                            active={currentPath === element.path}
                            icon={element.icon} />
                    )
                })}
            </ul>       
        </>
    );
};

export default NavbarMenuMobile;
