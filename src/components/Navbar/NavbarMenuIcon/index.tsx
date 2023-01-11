import React, { useState, useEffect } from 'react';
import './style.css';

interface Icons {
    openIcon: string;
    closeIcon: string;
}

interface PropsListElements {
    propIcons: Icons;
    propClicked: boolean;
}

const NavbarMenuIcon: React.FC<PropsListElements> = ({propIcons, propClicked}) => {
    const [clicked, setClicked] = useState<boolean>(propClicked);

    useEffect(() => {
        setClicked(propClicked)
    }, [propClicked]);

    return (
        <>
            <div className="navbar-menu-icon">
                <i 
                    className={clicked ? propIcons.closeIcon : propIcons.openIcon}>
                </i>
            </div>
        </>
    );
};

export default NavbarMenuIcon;
