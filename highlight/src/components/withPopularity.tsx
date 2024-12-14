import React from 'react';
import Popular from './Popular';
import New from './New';

interface WithPopularityProps {
    views: number;
    children: React.ReactNode;
}

const withPopularity = (Component: React.ComponentType<WithPopularityProps>) => {
    return ({ views, ...props }: WithPopularityProps) => {
        if (views >= 1000) {
            return (
                <Popular>
                    <Component views={views} {...props} />
                </Popular>
            );
        } else {
            return (
                <New>
                    <Component views={views} {...props} />
                </New>
            );
        }
    };
};

export default withPopularity;
