import { ExternalLink } from 'lucide-react';
import React, { FC } from 'react';

interface ISearchItem {
    data: {
        _id: string;
        label: string;
    };
}

const SearchItem: FC<ISearchItem> = ({ data }) => {
    return (
        <div className="flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-muted hover:text-muted-foreground">
            <p>{data.label}</p>
            <ExternalLink size={20} />
        </div>
    );
};

export default SearchItem;
