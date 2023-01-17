import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ListElementProps {
    text: string;
    color?: string;
    emoji?: string;
    time?: number;
    onClick?: Function;
}

const RippleButton: React.FC<ListElementProps> = ({text, color, emoji, time, onClick}) => {
    const rippleTime = time ? time : 1000;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const buttonCoords = e.currentTarget.getBoundingClientRect();

        const newRipple  = document.createElement("span");
        newRipple.classList.add("ripple-effect");
        newRipple.style.left = `${e.clientX - buttonCoords.left}px`;
        newRipple.style.top = `${e.clientY - buttonCoords.top}px`;

        e.currentTarget.appendChild(newRipple)

        setTimeout(() => {
            newRipple.remove();
        }, rippleTime);

        onClick && onClick();
    };

    return (
        <>
            <button
                className={`btn ${color ? color : ""}`}
                onClick={handleClick}
                >

                <span className="text">{text}</span>

                {/* {iconName ?
                    <FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />
                :   ""} */}
                {emoji ?
                    <span className="emoji">{emoji}</span>
                :   ""}

            </button>
        </>
    );
};

export default RippleButton;