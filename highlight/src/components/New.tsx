import React from 'react';

interface NewProps {
    children: React.ReactNode;
}

const New: React.FC<NewProps> = ({ children }) => {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {children}
        </div>
    );
};

export default New;
