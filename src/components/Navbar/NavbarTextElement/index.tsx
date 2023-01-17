import React from 'react';

interface NavbarListElementProps {
    name: string;
    active?: boolean;
    icon?: string;
}

class NavbarTextElement extends React.Component<NavbarListElementProps, {}> {
    render() {
        return (
            <>
                <li>
                    <a
                        className={this.props.active ? "active" : ""}
                        href="/">
                        <i
                            className={this.props.icon ? this.props.icon : ""}>
                        </i>
                        <p>{this.props.name}</p>
                    </a>
                </li>
            </>
        );
    }
};

export default NavbarTextElement;