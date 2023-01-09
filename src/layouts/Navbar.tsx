import React from 'react';
import Logo from '../components/Navbar/NavbarLogo';
import NavbarListElement from '../components/Navbar/NavbarListElement';
import "../styles/NavbarStyle.css";

interface NavbarState {
    clicked: boolean;
    currentPath: string;
}

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
                            <NavbarListElement 
                                name={"Home"} 
                                active={this.state.currentPath === "/"} icon={false} />
                            <NavbarListElement 
                                name={"Work"} 
                                active={this.state.currentPath === "/work"}
                                icon={false} />
                            <NavbarListElement 
                                name={"Social"} 
                                active={this.state.currentPath === "/social"}
                                icon={false} />
                            <NavbarListElement 
                                name={"Contact"}
                                active={this.state.currentPath === "/contact"}
                                icon={false} />
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
                        <NavbarListElement 
                            name={"Home"} 
                            active={this.state.currentPath === "/"}
                            icon={true} />
                        <NavbarListElement 
                            name={"Work"} 
                            active={this.state.currentPath === "/work"}
                            icon={true} />
                        <NavbarListElement 
                            name={"Social"} 
                            active={this.state.currentPath === "/social"}
                            icon={true} />
                        <NavbarListElement 
                            name={"Contact"}
                            active={this.state.currentPath === "/contact"}
                            icon={true} />
                    </ul>
                </nav>                
            </>
        );
    }
};

export default Navbar;