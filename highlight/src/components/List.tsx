import React from 'react';
import withPopularity from './withPopularity';
import Article from './Article';
import Video from './Video';

const WrappedArticle = withPopularity(Article);
const WrappedVideo = withPopularity(Video);

interface ListProps {
    list: Array<{ type: string; [key: string]: any }>;
}

const List: React.FC<ListProps> = ({ list }) => {
    return list.map(item => {
        switch (item.type) {
            case 'video':
                return <WrappedVideo key={item.url} {...item} />;
            case 'article':
                return <WrappedArticle key={item.title} {...item} />;
            default:
                return null;
        }
    });
};

export default List;
