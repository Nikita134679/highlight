import React from 'react';

interface VideoProps {
    url: string;
    views: number;
}

const Video: React.FC<VideoProps> = ({ url, views }) => {
    return (
        <div className="item item-video">
            <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {views}</p>
        </div>
    );
};

export default Video;
