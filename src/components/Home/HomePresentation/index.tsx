import React from 'react';
import PresentationCard from '../../Cards/PresentationCard';
import './style.css';
import AlanImg from '../../../assets/home/alan_presentation.png';


const Presentation: React.FC = () => {
    return (
        <>
            <div className="home-presentation">
                <div className="presentation-col-1">
                    <PresentationCard />
                </div>

                <div className="presentation-col-2">
                    <div className="image-container">
                        <img src={AlanImg} alt="Alan" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Presentation;
