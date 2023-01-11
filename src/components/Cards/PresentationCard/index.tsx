import React from 'react';
import useTyped from '../../../hooks/TypedHook/useTyped';
import RippleButton from '../../Buttons/RippleButton';
import './style.css';

const texts: string[] =  [
    "Frontend", 
    "Backend", 
    "Web Developer",
    "Machine Learning"
];

const PresentationCard: React.FC = () => {
    const el = useTyped(texts, { 
        loop: true,
        backDelay: 1500,
        shuffle: false,
        showCursor: true });

    return (
        <>
            <div className="presentation-card">
                <div className="greeting">
                    <span>Hello_</span>
                </div>
                <div className="name">
                    <span>I'm</span>
                    <span>Alan</span>
                </div>

                <div className="changing-text"> 
                    <span>
                        <span ref={el}></span>
                    </span>
                </div>
                
                <p>
                    Developer focused on cleanliness, efficiency and code maintenance. Experience in developing software projects, both on the Front-End and Back-End sides, and also in practical optimization and Machine Learning projects. Ready to meet me?
                </p>

                <div className="buttons">
                    <RippleButton text="Download CV" />
                    <RippleButton text="Hire Me" />
                </div>
            </div>
        </>
    );
};

export default PresentationCard;
