import React from 'react';
import './style.css';

interface ListElementProps {
    text: string;
    color?: string;
    icon?: string;
}

class RippleButton extends React.Component<ListElementProps, {}> {
    render() {
        return (
            <>
                <button 
                    className={this.props.color ? this.props.color : ""}>
                    <span>{this.props.text}</span>
                    <i 
                        className={this.props.icon ? this.props.icon : ""}>
                    </i>
                </button>
            </>
        );
    }
};

export default RippleButton;