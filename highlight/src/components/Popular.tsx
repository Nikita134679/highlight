import React from 'react';

interface PopularProps {
    children: React.ReactNode;
}

const Popular: React.FC<PopularProps> = ({ children }) => {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {children}
        </div>
    );
};

export default Popular;
