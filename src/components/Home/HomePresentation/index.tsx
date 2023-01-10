import React from 'react';
import useTyped from '../../../hooks/TypedHook/useTyped';
import './style.css';

const texts: string[] =  [
    "Frontend   ", 
    "Backend   ", 
    "MachineLearning   "
];

const HomePresentation: React.FC = () => {
    const el = useTyped(texts, { 
        loop: true,
        backDelay: 1500,
        shuffle: false,
        showCursor: true });

    return (
        <>
            <div className="home-presentation">
                <div className="presentation-left">
                    <span className="greeting">Hello_</span>
                    <div className="name">
                        <span>I'm </span>
                        <span>Alan</span>
                    </div>

                    <div className="changing-text"> 
                        <span>
                            &lt;
                            <span ref={el}></span>
                            /&gt;
                        </span>
                    </div>
                    
                    <p>
                        Developer focused on cleanliness, efficiency and code maintenance. Experience in developing software projects, both on the Front-End and Back-End sides, and also in practical optimization and Machine Learning projects. Ready to meet me?
                    </p>

                    <div className="presentation-buttons">
                        <button>Download CV</button>
                        <button>Hire Me</button>
                    </div>
                </div>


                <div className="presentation-right">
                    
                </div>
            </div>
        </>
    );
};

export default HomePresentation;
