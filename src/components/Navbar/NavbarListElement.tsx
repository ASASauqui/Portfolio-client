import React from 'react';

interface NavbarListElementProps {
    name: string
    active?: boolean
}

const icons: { [key: string]: string } = {
    "Home": "fas fa-home",
    "Work": "fas fa-briefcase",
    "Social": "fas fa-paper-plane",
    "Contact": "fas fa-handshake",
  };

class NavbarListElement extends React.Component<NavbarListElementProps, {}> {
    render() {
        return (
            <>
                <li>
                    <a 
                        className={this.props.active ? "active" : ""}
                        href="/">
                        {this.props.name}
                    </a>
                </li>
            </>
        );
    }
};

export default NavbarListElement;