import React from 'react';
import NavbarTextElement from '../NavbarTextElement';
import './style.css';

interface NavbarState {
    currentPath: string;
}

interface NavbarElement {
    name: string;
    path: string;
    icon: string;
}

interface PropsListElements {
    listElements: NavbarElement[];
}

class NavbarList extends React.Component<PropsListElements, NavbarState> {
    state: NavbarState = {
        currentPath: window.location.pathname
    };

    render() {
        return (
            <>
                <ul
                    id="navbar-list">
                    {this.props.listElements.map(element => {
                        return (
                            <NavbarTextElement
                                key={element.name}
                                name={element.name}
                                active={this.state.currentPath === element.path}
                            />
                        )
                    })}
                </ul>
            </>
        );
    }
};

export default NavbarList;