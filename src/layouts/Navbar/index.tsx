import React from 'react';
import NavbarList from '../../components/Navbar/NavbarList';
import NavbarMenuMobile from '../../components/Navbar/NavbarMenuMobile';
import NavbarMenuIcon from '../../components/Navbar/NavbarMenuIcon';
import Logo from '../../components/Navbar/NavbarLogo';
import './style.css';

interface NavbarState {
    clicked: boolean;
    currentPath: string;
}

const NavbarTextElements:{name: string, path: string, icon: string}[] =
[
    {name: "Home", path: "/", icon: "fas fa-home"},
    {name: "Work", path: "/work", icon: "fas fa-briefcase"},
    {name: "Social", path: "/social", icon: "fas fa-paper-plane"},
    {name: "Contact", path: "/contact", icon: "fas fa-handshake"}
];

const Icons:{openIcon: string, closeIcon: string} = {
    openIcon: "fas fa-bars", 
    closeIcon: "fas fa-times"
};

class Navbar extends React.Component<{}, NavbarState> {
    state: NavbarState = {
        clicked: false,
        currentPath: window.location.pathname
    };

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }

    render() {
        return (
            <>
                <nav>
                    <div className="navbar">
                        <div id="navbar-left">
                            <Logo />
                        </div>

                        <div id="navbar-right">
                            <NavbarList listElements={NavbarTextElements} />
                        </div>
                        

                        <div 
                            id="navbar-left-mobile"
                            onClick={this.handleClick}>
                            <NavbarMenuIcon 
                                propIcons={Icons}
                                propClicked={this.state.clicked}/>
                        </div>

                        <div id="navbar-right-mobile">
                            <Logo />
                        </div>
                    </div>

                    <div id="navbar-menu-mobile">
                        <NavbarMenuMobile 
                            propListElements={NavbarTextElements}
                            propClicked={this.state.clicked} 
                        />
                    </div>
                </nav>                
            </>
        );
    }
};

export default Navbar;