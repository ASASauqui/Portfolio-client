import React from 'react';

class HomePresentation extends React.Component<{}, {}> {
    render() {
        return (
            <>
                <div className="home-presentation">
                    <div className="presentation-left"></div>
                    <div className="presentation-center"></div>
                    <div className="presentation-right"></div>
                </div>
            </>
        );
    }
};

export default HomePresentation;