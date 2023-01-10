import React from 'react';
import './style.css';

interface NavbarListElementProps {
    name: string;
    active?: boolean;
    icon?: boolean;
}

const icons: { [key: string]: string } = {
    Home: "fas fa-home",
    Work: "fas fa-briefcase",
    Social: "fas fa-paper-plane",
    Contact: "fas fa-handshake",
};

class NavbarListElement extends React.Component<NavbarListElementProps, {}> {
    render() {
        return (
            <>
                <li>
                    <a 
                        className={this.props.active ? "active" : ""}
                        href="/">
                        <i 
                            className={this.props.icon ? icons[this.props.name] : ""}>
                        </i>
                        <p>{this.props.name}</p>
                    </a>
                </li>
            </>
        );
    }
};

export default NavbarListElement;