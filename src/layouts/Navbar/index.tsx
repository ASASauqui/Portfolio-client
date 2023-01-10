import React from 'react';
import Logo from '../../components/Navbar/NavbarLogo';
import NavbarListElement from '../../components/Navbar/NavbarListElement';
import './style.css';

interface NavbarState {
    clicked: boolean;
    currentPath: string;
}

const NavbarListElements:{name: string, path: string}[] =
[
    {name: "Home", path: "/"},
    {name: "Work", path: "/work"},
    {name: "Social", path: "/social"},
    {name: "Contact", path: "/contact"}
];

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
                            <a href="/">
                                <Logo />
                            </a>
                        </div>

                        <ul 
                            id="navbar-right">
                            {NavbarListElements.map(element => {
                                return (
                                    <NavbarListElement 
                                        key={element.name}
                                        name={element.name}
                                        active={this.state.currentPath === element.path}
                                        icon={false} />
                                )
                            })}
                        </ul>

                        <div 
                            id="navbar-left-mobile"
                            onClick={this.handleClick}>
                            <i 
                                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
                            </i>
                        </div>

                        <div id="navbar-right-mobile">
                            <a href="/">
                                <Logo />
                            </a>
                        </div>
                    </div>

                    <ul 
                        id="navbar-menu-mobile" 
                        className={this.state.clicked ? "#navbar-menu-mobile active" : "#navbar-menu-mobile"}>
                        {NavbarListElements.map(element => {
                            return (
                                <NavbarListElement 
                                    key={element.name + '1'}
                                    name={element.name}
                                    active={this.state.currentPath === element.path}
                                    icon={true} />
                            )
                        })}
                    </ul>
                </nav>                
            </>
        );
    }
};

export default Navbar;