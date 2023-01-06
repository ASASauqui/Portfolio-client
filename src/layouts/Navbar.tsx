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
                    <a href="/">
                        <Logo />
                    </a>

                    <div>
                        <ul 
                            id="navbar-element-list" 
                            className={this.state.clicked ? "#navbar-element-list active" : "#navbar-element-list"}>
                            <NavbarListElement name={"Home"} 
                                active={this.state.currentPath === "/"} />
                            <NavbarListElement name={"Work"} 
                                active={this.state.currentPath === "/work"} />
                            <NavbarListElement name={"Social"} 
                                active={this.state.currentPath === "/social"} />
                            <NavbarListElement name={"Contact"}
                                active={this.state.currentPath === "/contact"} />
                        </ul>
                    </div>

                    <div 
                        id="navbar-element-list-mobile"
                        onClick={this.handleClick}>
                        <i 
                            id={this.state.clicked ? "animation" : ""}
                            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
                        </i>
                    </div>
                </nav>
            </>
        );
    }
};

export default Navbar;